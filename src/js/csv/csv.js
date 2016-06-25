const csvWriter = require('csv-write-stream')
const leftPad = require('left-pad')
const fs = require('fs')

let modernColorList = require('../colors/modernColorsList')

class CSVGenerator {
	constructor (properties) {
		this.properties = properties
	}

	generateSymbol (num) {
		let gaps = [
			{ start: 9728, end: 10208 },
			{ start: 11264, end: 11310 },
			{ start: 11520, end: 11557 },
			{ start: 40960, end: 42112 }
		]

		let len = 0
		let i = 0
		while (num > gaps[i].end - gaps[i].start + len) {
			len = gaps[i].end - gaps[i].start
			i++
		}

		let hexNum = num + gaps[i].start
		return String.fromCharCode(hexNum)
	}

	getSymbols () {
		this.properties.colorsList.forEach((colorNum, i) => {
			modernColorList[colorNum].symbol = this.generateSymbol(i)
		})
	}

	generateCSV (path) {
		let width = this.properties.shape[0]
		let height = this.properties.shape[1]
		if (this.properties.shape.length === 4) {
			width = this.properties.shape[1]
			height = this.properties.shape[2]
		}

		let headers = []
		for (let i = 1; i <= width; i += 1) {
			headers.push(i)
		}

		let writer = csvWriter({ headers: headers})
		writer.pipe(fs.createWriteStream(path, {
			defaultEncoding: 'utf8'
		}))

		for (let i = 0; i < height; i += 1) {
			let csvLine = []

			for (let j = 0; j < width; j+= 1) {
				let hex = this.properties.hex[i*width + j]
				let colorNum = this.properties.colorNames[hex]
				csvLine.push(modernColorList[colorNum].symbol)
			}

			writer.write(csvLine)
		}

		writer.end()
	}	
}

module.exports = CSVGenerator