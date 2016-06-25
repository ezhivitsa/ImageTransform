'use strict';
const fs = require('fs');
const getPixels = require("get-pixels");
const rgb2hex = require('rgb2hex');
const R = require('ramda');
const when = require('when');
const hexRgb = require('hex-rgb');
const errorTypes = require('../errors/errorTypes');

const colorsList = require('../colors/modernColorsList');

const defaults = {
	lastModified: null,
	lastModifiedDate: null,
	name: null,
	path: null,
	size: null,
	type: null
};

let search = (array, color, start, end) => {
	if ( end < start ) {
		return -1;
	}
	else {
		let half = Math.round((end + start)/2);
		let colorNum = parseInt(color, 16);
		if ( parseInt(array[half].start, 16) <= colorNum && colorNum <= parseInt(array[half].end, 16) ) {
			return half;
		}
		else if ( colorNum < parseInt(array[half].start, 16) ) {
			return search(array, color, start, half - 1);
		}
		else if ( parseInt(array[half].end, 16) < colorNum ) {
			return search(array, color, half + 1, end);
		}
	}
};

/**
* Calculate distance between two colors in rgd formats 
* @param {Object} originalColor - colro from the list of colors
* @param {Number[]} color - [r,g,b] array
* @return Number - distance detween colors
*/
let getDistance = function (originalColor, color) {
	let r = color[0],
		g = color[1],
		b = color[2];

	let tr = originalColor.r,
		tg = originalColor.g,
		tb = originalColor.b;
	
	let baseDistance = ((r - tr) * (r - tr)) + ((g - tg) * (g - tg)) + ((b - tb) * (b - tb));

	return baseDistance;
};

/**
* Calculate distance for each colors that precents in list of colors
* and find the most similar color
* @param {Object} rgb - color in rgb format
* @return {Object} - the most similar color
*/
let getSimilar = function (rgb) {
	let minDistance = Infinity,
		similar = null;

	for (var i = 0; i < colorsList.length; i += 1) {
		let distance = getDistance(colorsList[i], rgb);

		if ( distance < minDistance ) {
			similar = i;
			minDistance = distance;
		}

		if (distance <= Number.EPSILON) {
			break
		}
	}

	return similar;
};

function UploadedFile (options) {
	R.map(key => {
		this[key] = (options[key] || defaults[key]);
	}, R.keys(defaults));
}

UploadedFile.prototype.isImage = function () {
	return this.type.indexOf('image') !== -1;
};

UploadedFile.prototype.upload = function () {
	let self = this;
	let promise = when.promise(function(resolve, reject, notify) {
		getPixels(self.path, function(err, pixels) {
			if(err) {
				return reject({
					type: errorTypes.get,
					message: "Bad image path"
				});
			}
			self.hex = [];
			self.shape = pixels.shape;

			let height = (pixels.shape.length !== 4) ? pixels.shape[2] : pixels.shape[3]
			for ( let i = 0; i < pixels.data.length; i += height) {
				self.hex.push(rgb2hex(`rgb(${pixels.data[i]},${pixels.data[i + 1]},${pixels.data[i + 2]})`).hex);
			}

			self.colors = R.uniq(self.hex);
			resolve(self);
		});
	});

	return promise;
};

UploadedFile.prototype.parse = function () {
	let colorNames = {};
	let resultColors = [];

	this.colors.forEach((color) => {
		let similarColor = getSimilar(hexRgb(color));

		colorNames[color] = similarColor
		resultColors.push(similarColor)
	});

	resultColors = R.uniq(resultColors)

	let imageProperties = {
		shape: this.shape,
		hex: this.hex,
		colorNames: colorNames,
		colorsList: resultColors
	};

	return imageProperties;
};

module.exports = UploadedFile;