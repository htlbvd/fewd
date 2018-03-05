(function (window) {
	'use strict';
	var App = window.App || {};
	var Promise = window.Promise;
	function DataStore() {
		this.data = {};
	}

	function promiseResolvedWith(value) {
		var promise = new Promise(function (resolve, reject) {
			resolve(value);
		});
		return promise;
	}
	DataStore.prototype.add = function(key, val) {
		// var promise = new Promise(function (resolve, reject) {
		// 	this.data[key] = val;
		// 	resolve(null);
		// }.bind(this));
		// return promise;
		this.data[key] = val;
		return promiseResolvedWith(null);
	};
	DataStore.prototype.get = function(key) {
		// return this.data[key];
		return promiseResolvedWith(this.data[key]);
	};
	DataStore.prototype.getAll = function() {
		// return this.data;
		return promiseResolvedWith(this.data);
	};
	DataStore.prototype.remove = function(key) {
		delete this.data[key];
		return promiseResolvedWith(null);
	};


	App.DataStore = DataStore;
	window.App = App;
})(window);

