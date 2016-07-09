const Excel = require('exceljs')
const leftPad = require('left-pad')
const fs = require('fs')
const {dialog} = require('electron').remote
const rgb2hex = require('rgb2hex')

let modernColorList = require('../colors/modernColorsList')

/**
* Get presentation of the number in Excel letters-style
* @param {Number} number
* @return {String} 
*/
let getLetterByNumber = (number) => {
	let letters = []
	let num = number + 1
	while (num > 0) {
		let n = number % 26
		letters.push(n)
		num = Math.floor(number / 26)
	}
	letters = letters.reverse().map(num => String.fromCharCode(num + 64))
	return letters.join('')
}

class CSVGenerator {
	constructor (path) {
		this.path = path
	}

	setProperties (properties) {
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

	generateCSV () {
		let workbook = new Excel.Workbook();
		workbook.creator = 'Evgeny Zhivitsa'
		workbook.lastModifiedBy = 'Evgeny Zhivitsa'
		workbook.created = new Date()
		workbook.modified = new Date()

		let sheet = workbook.addWorksheet('Sheet 1');

		let width = this.properties.shape[0]
		let height = this.properties.shape[1]
		if (this.properties.shape.length === 4) {
			width = this.properties.shape[1]
			height = this.properties.shape[2]
		}

		let rowNumber = 1

		let line = []
		this.properties.colorsList.forEach((colorNum, i) => {
			let color = modernColorList[colorNum]
			line = line.concat(color.symbol, 'gamma:', color.gamma.number, 'dmc:', color.dmc.number, '')

			if ((i + 1) % 3 === 0) {
				sheet.addRow(line)
				line = []
			}
		})

		sheet.addRow(line)
		sheet.addRow(['-----', '-----', '-----', '-----', '-----', '-----'])

		let len = 0
		this.properties.colorsList.forEach((colorNum, i) => {
			let color = modernColorList[colorNum]
			len += 6

			let column = getLetterByNumber(len - 5)
			let hex = rgb2hex(`rgb(${color.r},${color.g},${color.b})`).hex.slice(1).toUpperCase()

			if (color.r < 150 && color.g < 150 && color.b < 150) {
				sheet.getCell(`${column}${rowNumber}`).font = {
					color: { argb: 'FFFFFFFF' }
				}
			}
			
			sheet.getCell(`${column}${rowNumber}`).fill = {
				type: 'pattern',
				pattern: 'solid',
				fgColor: {argb: `FF${hex}` }
			}

			if ((i + 1) % 3 === 0) {
				len = 0
				rowNumber += 1
			}
		})
		rowNumber += 1

		for (let i = 0; i < height; i += 1) {
			let csvLine = []

			for (let j = 0; j < width; j+= 1) {
				let hex = this.properties.hex[i*width + j]
				let colorNum = this.properties.colorNames[hex]
				csvLine.push(modernColorList[colorNum].symbol)
			}

			sheet.addRow(csvLine)
		}

		workbook.xlsx.writeFile(this.path)
		    .then(function() {
		        console.log('xlsx writed')
		    });
	}

	download () {
		let resultContent = fs.readFileSync(this.path)

		dialog.showSaveDialog({
			title: 'CSV file',
			defaultPath: 'result.csv'
		}, (filePath) => {
			fs.writeFile(filePath, resultContent, function (err) {
		        if(err) console.error(err);
		    });
		})
	}
}

module.exports = CSVGenerator