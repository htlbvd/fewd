(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wsClient = require('./ws-client');

var _wsClient2 = _interopRequireDefault(_wsClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ChatApp = function ChatApp() {
	_classCallCheck(this, ChatApp);

	_wsClient2.default.init('ws://localhost:3001');
	_wsClient2.default.registerOpenHandler(function () {
		var message = new ChatMessage({ message: 'pow!' });
		_wsClient2.default.sendMessage(message.serialize());
	});
	_wsClient2.default.registerMessageHandler(function (data) {
		console.log(data);
	});
};

var ChatMessage = function () {
	function ChatMessage(_ref) {
		var m = _ref.message,
		    _ref$user = _ref.user,
		    u = _ref$user === undefined ? 'batman' : _ref$user,
		    _ref$timestamp = _ref.timestamp,
		    t = _ref$timestamp === undefined ? new Date().getTime() : _ref$timestamp;

		_classCallCheck(this, ChatMessage);

		this.message = m;
		this.user = u;
		this.timestamp = t;
	}

	_createClass(ChatMessage, [{
		key: 'serialize',
		value: function serialize() {
			return {
				user: this.user,
				message: this.message,
				timestamp: this.timestamp
			};
		}
	}]);

	return ChatMessage;
}();

exports.default = ChatApp;

},{"./ws-client":3}],2:[function(require,module,exports){
'use strict';

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _app2.default();

},{"./app":1}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var socket = void 0;
function init(url) {
	socket = new WebSocket(url);
	console.log('connecting...');
}

function registerOpenHandler(handlerFunction) {
	socket.onopen = function () {
		console.log('open');
		handlerFunction();
	};
}

function registerMessageHandler(handlerFunction) {
	socket.onmessage = function (e) {
		console.log('message', e.data);
		var data = JSON.parse(e.data);
		handlerFunction(data);
	};
}

function sendMessage(payload) {
	socket.send(JSON.stringify(payload));
}

exports.default = {
	init: init,
	registerOpenHandler: registerOpenHandler,
	registerMessageHandler: registerMessageHandler,
	sendMessage: sendMessage
};

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvc2NyaXB0cy9zcmMvYXBwLmpzIiwiYXBwL3NjcmlwdHMvc3JjL21haW4uanMiLCJhcHAvc2NyaXB0cy9zcmMvd3MtY2xpZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7SUFFTSxPLEdBQ0wsbUJBQWM7QUFBQTs7QUFDYixvQkFBTyxJQUFQLENBQVkscUJBQVo7QUFDQSxvQkFBTyxtQkFBUCxDQUEyQixZQUFNO0FBQ2hDLE1BQUksVUFBVSxJQUFJLFdBQUosQ0FBZ0IsRUFBRSxTQUFTLE1BQVgsRUFBaEIsQ0FBZDtBQUNBLHFCQUFPLFdBQVAsQ0FBbUIsUUFBUSxTQUFSLEVBQW5CO0FBQ0EsRUFIRDtBQUlBLG9CQUFPLHNCQUFQLENBQThCLFVBQUMsSUFBRCxFQUFVO0FBQ3ZDLFVBQVEsR0FBUixDQUFZLElBQVo7QUFDQSxFQUZEO0FBR0EsQzs7SUFHSSxXO0FBQ0wsNEJBSUc7QUFBQSxNQUhPLENBR1AsUUFIRixPQUdFO0FBQUEsdUJBRkYsSUFFRTtBQUFBLE1BRkksQ0FFSiw2QkFGTSxRQUVOO0FBQUEsNEJBREYsU0FDRTtBQUFBLE1BRFMsQ0FDVCxrQ0FEWSxJQUFJLElBQUosRUFBRCxDQUFhLE9BQWIsRUFDWDs7QUFBQTs7QUFDRixPQUFLLE9BQUwsR0FBZSxDQUFmO0FBQ0EsT0FBSyxJQUFMLEdBQVksQ0FBWjtBQUNBLE9BQUssU0FBTCxHQUFpQixDQUFqQjtBQUNBOzs7OzhCQUNXO0FBQ1gsVUFBTztBQUNOLFVBQU0sS0FBSyxJQURMO0FBRU4sYUFBUyxLQUFLLE9BRlI7QUFHTixlQUFXLEtBQUs7QUFIVixJQUFQO0FBS0E7Ozs7OztrQkFHYSxPOzs7OztBQ2xDZjs7Ozs7O0FBQ0E7Ozs7Ozs7O0FDREEsSUFBSSxlQUFKO0FBQ0EsU0FBUyxJQUFULENBQWMsR0FBZCxFQUFtQjtBQUNsQixVQUFTLElBQUksU0FBSixDQUFjLEdBQWQsQ0FBVDtBQUNBLFNBQVEsR0FBUixDQUFZLGVBQVo7QUFDQTs7QUFFRCxTQUFTLG1CQUFULENBQTZCLGVBQTdCLEVBQThDO0FBQzdDLFFBQU8sTUFBUCxHQUFnQixZQUFNO0FBQ3JCLFVBQVEsR0FBUixDQUFZLE1BQVo7QUFDQTtBQUNBLEVBSEQ7QUFJQTs7QUFFRCxTQUFTLHNCQUFULENBQWdDLGVBQWhDLEVBQWlEO0FBQ2hELFFBQU8sU0FBUCxHQUFtQixVQUFDLENBQUQsRUFBTztBQUN6QixVQUFRLEdBQVIsQ0FBWSxTQUFaLEVBQXVCLEVBQUUsSUFBekI7QUFDQSxNQUFJLE9BQU8sS0FBSyxLQUFMLENBQVcsRUFBRSxJQUFiLENBQVg7QUFDQSxrQkFBZ0IsSUFBaEI7QUFDQSxFQUpEO0FBS0E7O0FBRUQsU0FBUyxXQUFULENBQXFCLE9BQXJCLEVBQThCO0FBQzdCLFFBQU8sSUFBUCxDQUFZLEtBQUssU0FBTCxDQUFlLE9BQWYsQ0FBWjtBQUNBOztrQkFFYztBQUNkLFdBRGM7QUFFZCx5Q0FGYztBQUdkLCtDQUhjO0FBSWQ7QUFKYyxDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc31yZXR1cm4gZX0pKCkiLCJpbXBvcnQgc29ja2V0IGZyb20gJy4vd3MtY2xpZW50JztcclxuXHJcbmNsYXNzIENoYXRBcHAge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c29ja2V0LmluaXQoJ3dzOi8vbG9jYWxob3N0OjMwMDEnKTtcclxuXHRcdHNvY2tldC5yZWdpc3Rlck9wZW5IYW5kbGVyKCgpID0+IHtcclxuXHRcdFx0bGV0IG1lc3NhZ2UgPSBuZXcgQ2hhdE1lc3NhZ2UoeyBtZXNzYWdlOiAncG93ISd9KTtcclxuXHRcdFx0c29ja2V0LnNlbmRNZXNzYWdlKG1lc3NhZ2Uuc2VyaWFsaXplKCkpO1xyXG5cdFx0fSk7XHJcblx0XHRzb2NrZXQucmVnaXN0ZXJNZXNzYWdlSGFuZGxlcigoZGF0YSkgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhkYXRhKTtcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG5cclxuY2xhc3MgQ2hhdE1lc3NhZ2Uge1xyXG5cdGNvbnN0cnVjdG9yKHtcclxuXHRcdG1lc3NhZ2U6IG0sXHJcblx0XHR1c2VyOiB1PSdiYXRtYW4nLFxyXG5cdFx0dGltZXN0YW1wOiB0PShuZXcgRGF0ZSgpKS5nZXRUaW1lKClcclxuXHR9KSB7XHJcblx0XHR0aGlzLm1lc3NhZ2UgPSBtO1xyXG5cdFx0dGhpcy51c2VyID0gdTtcclxuXHRcdHRoaXMudGltZXN0YW1wID0gdDtcclxuXHR9XHJcblx0c2VyaWFsaXplKCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0dXNlcjogdGhpcy51c2VyLFxyXG5cdFx0XHRtZXNzYWdlOiB0aGlzLm1lc3NhZ2UsXHJcblx0XHRcdHRpbWVzdGFtcDogdGhpcy50aW1lc3RhbXBcclxuXHRcdH07XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGF0QXBwO1xyXG4iLCJpbXBvcnQgQ2hhdEFwcCBmcm9tICcuL2FwcCc7XHJcbm5ldyBDaGF0QXBwKCk7IiwibGV0IHNvY2tldDtcclxuZnVuY3Rpb24gaW5pdCh1cmwpIHtcclxuXHRzb2NrZXQgPSBuZXcgV2ViU29ja2V0KHVybCk7XHJcblx0Y29uc29sZS5sb2coJ2Nvbm5lY3RpbmcuLi4nKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVnaXN0ZXJPcGVuSGFuZGxlcihoYW5kbGVyRnVuY3Rpb24pIHtcclxuXHRzb2NrZXQub25vcGVuID0gKCkgPT4ge1xyXG5cdFx0Y29uc29sZS5sb2coJ29wZW4nKTtcclxuXHRcdGhhbmRsZXJGdW5jdGlvbigpO1xyXG5cdH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlZ2lzdGVyTWVzc2FnZUhhbmRsZXIoaGFuZGxlckZ1bmN0aW9uKSB7XHJcblx0c29ja2V0Lm9ubWVzc2FnZSA9IChlKSA9PiB7XHJcblx0XHRjb25zb2xlLmxvZygnbWVzc2FnZScsIGUuZGF0YSk7XHJcblx0XHRsZXQgZGF0YSA9IEpTT04ucGFyc2UoZS5kYXRhKTtcclxuXHRcdGhhbmRsZXJGdW5jdGlvbihkYXRhKTtcclxuXHR9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZW5kTWVzc2FnZShwYXlsb2FkKSB7XHJcblx0c29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkocGF5bG9hZCkpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0aW5pdCxcclxuXHRyZWdpc3Rlck9wZW5IYW5kbGVyLFxyXG5cdHJlZ2lzdGVyTWVzc2FnZUhhbmRsZXIsXHJcblx0c2VuZE1lc3NhZ2VcclxufSJdfQ==
