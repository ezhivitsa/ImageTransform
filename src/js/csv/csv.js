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
	let num = number
	if (num >= 26) {
		while (num >= 26) {
			let n = num % 26
			letters.push(n)
			num = Math.floor(num / 26)
		}
		if (num > 0) {
			letters.push(num - 1)
		}
	} else {
		letters.push(num)
	}
	letters = letters.reverse().map(num => String.fromCharCode(num + 65))
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

			let column = getLetterByNumber(len - 6)
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
		rowNumber += 2

		for (let i = 0; i < height; i += 1) {
			let csvLine = []

			for (let j = 0; j < width; j+= 1) {
				let hex = this.properties.hex[i*width + j]
				let colorNum = this.properties.colorNames[hex]
				csvLine.push(modernColorList[colorNum].symbol)
			}

			sheet.addRow(csvLine)
		}

		for (let i = 0; i < height; i += 1) {
			for (let j = 0; j < width; j += 1) {
				let hex = this.properties.hex[i*width + j]
				let colorNum = this.properties.colorNames[hex]
				let color = modernColorList[colorNum]

				let column = getLetterByNumber(j)
				let hexColor = rgb2hex(`rgb(${color.r},${color.g},${color.b})`).hex.slice(1).toUpperCase()

				sheet.getCell(`${column}${rowNumber}`).fill = {
					type: 'pattern',
					pattern: 'solid',
					fgColor: {argb: `FF${hexColor}` }
				}

				if (color.r < 150 && color.g < 150 && color.b < 150) {
					sheet.getCell(`${column}${rowNumber}`).font = {
						color: { argb: 'FFFFFFFF' }
					}
				}

				let top = this.getTopColor(width, height, i, j)
				let right = this.getRightColor(width, height, i, j)
				let left = this.getLeftColor(width, height, i, j)
				let bottom = this.getBottomColor(width, height, i, j)
				
				let border = {}
				if (!top || top !== color) {
					border.top = { style:'thin' }
				}
				if (!right || right !== color) {
					border.right = { style:'thin' }
				}
				if (!bottom || bottom !== color) {
					border.bottom = {style:'thin'}
				}
				if (!left || left !== color) {
					border.left = {style:'thin'}
				}

				sheet.getCell(`${column}${rowNumber}`).border = border
			}

			rowNumber += 1
		}

		workbook.xlsx.writeFile(this.path)
		    .then(function() {
		        console.log('xlsx writed')
		    });
	}

	getTopColor (width, height, i, j) {
		if (i <= 0) {
			return null
		} else {
			return this.getColor(width, i - 1, j)
		}
	}

	getBottomColor (width, height, i, j) {
		if (i >= height - 1) {
			return null
		} else {
			return this.getColor(width, i + 1, j)
		}
	}

	getLeftColor (width, height, i, j) {
		if (j <= 0) {
			return null
		} else {
			return this.getColor(width, i, j - 1)
		}
	}

	getRightColor (width, height, i, j) {
		if (j >= width - 1) {
			return null
		} else {
			return this.getColor(width, i, j + 1)
		}
	}

	getColor (width, i, j) {
		let hex = this.properties.hex[i*width + j]
		let colorNum = this.properties.colorNames[hex]
		let color = modernColorList[colorNum]
		return color	
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