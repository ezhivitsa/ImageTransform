'use strict';
const util = require('util');
const EventEmitter = require('events');
const eventTypes = require('./events');

function LoadingHandler (container) {
	this.container = container;
	this.init();

	EventEmitter.call(this);
}

LoadingHandler.prototype.init = function () {
	this.on(eventTypes.loading, this.showLoading);
	this.on(eventTypes.endLoading, this.removeLoading);
};

LoadingHandler.prototype.showLoading = function () {
	this.container.classList.add('wait');
};

LoadingHandler.prototype.removeLoading = function () {
	this.container.classList.remove('wait');
};

util.inherits(LoadingHandler, EventEmitter);
module.exports = LoadingHandler;