'use strict'
let fs = require('fs')
let jpeg = require('jpeg-js');
const {dialog} = require('electron').remote

let modernColorList = require('../colors/modernColorsList')

class ImageGenerator {
	constructor (path) {
		this.path = path
	}

	setProperties (properties) {
		this.properties = properties

		this.width = this.properties.shape[0]
		this.height = this.properties.shape[1]
		if (this.properties.shape.length === 4) {
			this.width = this.properties.shape[1]
			this.height = this.properties.shape[2]
		}
	}

	generate () {
		let resArray = []
		let rgbArray = this.properties.hex.forEach(hex => {
			let colorNum = this.properties.colorNames[hex]
			let color = modernColorList[colorNum]
			resArray.push(color.r)
			resArray.push(color.g)
			resArray.push(color.b)
			resArray.push(255)
		})
		
		var rawImageData = {
			data: new Buffer(resArray),
			width: this.width,
			height: this.height
		};
		var jpegImageData = jpeg.encode(rawImageData, 50);
    	fs.writeFileSync(this.path, jpegImageData.data);
	}

	download () {
		let resultContent = fs.readFileSync(this.path)

		dialog.showSaveDialog({
			title: 'Preview image',
			defaultPath: 'result.jpg'
		}, (filePath) => {
			fs.writeFile(filePath, resultContent, function (err) {
		        if(err) console.error(err);
		    });
		})
	}
}

module.exports = ImageGenerator