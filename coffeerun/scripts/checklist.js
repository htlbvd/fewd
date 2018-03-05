(function (window) {
	'use strict';

	var App = window.App || {};
	var $ = window.jQuery;

	function CheckList(selector) {
		if (!selector) {
			throw new Error('No selector provided');
		}

		this.$element = $(selector);
		if (this.$element.length === 0) {
			throw new Error('Coule not find element with selector: ' + selector);
		}
	}
	CheckList.prototype.addClickHandler = function(fn) {
		this.$element.on('click', 'input', function (event) {
			var email = event.target.value;
			fn(email)
				.then(function () {
					this.removeRow(email);
				}.bind(this));
		}.bind(this));
	};

	CheckList.prototype.addRow = function(coffeeOrder) {
		//移除匹配相应邮箱地址的已有行
		this.removeRow(coffeeOrder.emailAddress);
		//使用咖啡订单信息创建一个新的Row实例
		var rowElement = new Row(coffeeOrder);
		//把新的Row实例的$element属性添加到清单中
		this.$element.append(rowElement.$element);
	};

	CheckList.prototype.removeRow = function(email) {
		this.$element
			.find('[value="' + email + '"]')
			.closest('[data-coffee-order="checkbox"]')
			.remove();
	};

	function Row(coffeeOrder) {
		var $div = $('<div></div>',{
			'data-coffee-order': 'checkbox',
			'class': 'checkbox'
		});
		var $label = $('<label></label>');
		var $checkbox = $('<input></input>',{
			type: 'checkbox',
			value: coffeeOrder.emailAddress
		});
		var description = coffeeOrder.size + ' ';
		if (coffeeOrder.flavor) {
			description += coffeeOrder.flavor + ' ';
		}
		description += coffeeOrder.coffee + ', ';
		description += ' (' + coffeeOrder.emailAddress + ')';
		description += ' [' + coffeeOrder.strength + 'x]';

		$label.append($checkbox);
		$label.append(description);
		$div.append($label);

		this.$element = $div;

	}

	App.CheckList = CheckList;
	window.App = App;
})(window);
