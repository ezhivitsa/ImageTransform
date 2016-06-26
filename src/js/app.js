'use strict';
const Kefir = require('kefir');

const UploadedFile = require('./js/image/image');
const ErrorHandler = require('./js/errors/handler');
const LoadingHandler = require('./js/image/handler');
const CSV = require('./js/csv/csv')
const Preview = require('./js/preview/preview')

const errorTypes = require('./js/errors/errorTypes');
const uploadEvents = require('./js/image/events');

const form = document.querySelector('#upload-form')
const overlay = document.querySelector('.overlay')
const downloadPreview = document.querySelector('.download-preview')

const errorHandler = new ErrorHandler(form);
const loadingHandler = new LoadingHandler(overlay);

let filesStream = Kefir.fromEvents(form, 'submit')
	.map(function (e) {
		e.preventDefault();
		
		let files = e.target.elements.inputFile.files;
		let image;
		if ( files.length ) {
			image = new UploadedFile(files[0]);
			if ( image.isImage() ) {
				return Kefir.constant({
					type: uploadEvents.loading,
					image: image
				});
			}
			else {
				// generate error
				return Kefir.constantError({
					type: errorTypes.upload,
					message: 'Uploaded file is not a image or has incorrect dimension. Please, add the file with the dimension PNG, JPG or GIF.'
				});
			}
		}
		else {
			// show error message
			return Kefir.constantError({
				type: errorTypes.upload,
				message: 'Please, add the file that you want to upload.'
			});
		}

		return image;
	});

let filesProperty = filesStream.flatMap()
	.toProperty(() => { 
		return {
			type: uploadEvents.endLoading
		}; 
	});

let filesUpload = filesProperty.map(function (e) {
	loadingHandler.emit(e.type);

	let self = this;
	let image = e.image;
	if (image) {
		let promise = image.upload();
		promise
			.catch(function () {
				loadingHandler.emit(uploadEvents.endLoading);
			});

		return Kefir.fromPromise(promise);
	}
	else {
		return Kefir.constant({});
	}
}).flatMap();

let preview = new Preview('./src/result/result.jpg')
filesUpload.onValue(function (image) {
	if ( image instanceof UploadedFile ) {
		let properties = image.parse();

		let csvGenerator = new CSV(properties)
		csvGenerator.getSymbols()
		console.log('generated csv')

		csvGenerator.generateCSV('./src/result/result.csv')

		// generate preview jpg
		preview.setProperties(properties)
		preview.generate()
		console.log('generated preview')

		loadingHandler.emit(uploadEvents.endLoading);
	}
});

filesUpload.onError(function (e) {
	errorHandler.emit(e.type, e);
});

let previewStream = Kefir.fromEvents(downloadPreview, 'click')
	.onValue(e => {
		preview.download()
	})