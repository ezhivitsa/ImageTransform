'use strict';
const util = require('util');
const EventEmitter = require('events');
const errorTypes = require('./errorTypes');

function ErrorHandler (form) {
	EventEmitter.call(this);
	this.form = form;
	this.errorsParent = form.querySelector('.errors');

	this.init();
}

ErrorHandler.prototype.init = function () {
	this.on(errorTypes.upload, (error) => {
		this.clear();
		this.handle(error);
	});

	this.on(errorTypes.get, (error) => {
		this.clear();
		this.handle(error);
	});
};

ErrorHandler.prototype.clear = function () {
	this.errorsParent.innerHTML = '';
	this.form.querySelector('#inputFile').parentElement.classList.remove('has-error');
};

ErrorHandler.prototype.handle = function (error) {
	let errors = '<ul>';
	if ( error.message instanceof Array ) {
		for ( let i = 0; i < error.message.length; i++ ) {
			errors += `<li>${error.message[i]}</li>`;
		}
	}
	else {
		errors += `<li>${error.message}</li>`;
	}
	errors += '</ul>';
	this.errorsParent.innerHTML = errors;

	this.form.querySelector('#inputFile').parentElement.classList.add('has-error');
};

util.inherits(ErrorHandler, EventEmitter);
module.exports = ErrorHandler;