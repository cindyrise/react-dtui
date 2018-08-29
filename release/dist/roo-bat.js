(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react')) :
  typeof define === 'function' && define.amd ? define(['react'], factory) :
  (global['roo-bat'] = factory(global.React));
}(this, (function (React) { 'use strict';

  var React__default = 'default' in React ? React['default'] : React;

  var version = '1.7.1';

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var defineProperty = function (obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  };

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  var inherits = function (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  };

  var objectWithoutProperties = function (obj, keys) {
    var target = {};

    for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;
      if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
      target[i] = obj[i];
    }

    return target;
  };

  var possibleConstructorReturn = function (self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  };

  /*!
    Copyright (c) 2017 Jed Watson.
    Licensed under the MIT License (MIT), see
    http://jedwatson.github.io/classnames

    with fix with es6 export default
  */

  var hasOwn = {}.hasOwnProperty;

  function classNames() {
  	var classes = [];

  	for (var i = 0; i < arguments.length; i++) {
  		var arg = arguments[i];
  		if (!arg) continue;

  		var argType = typeof arg === 'undefined' ? 'undefined' : _typeof(arg);

  		if (argType === 'string' || argType === 'number') {
  			classes.push(arg);
  		} else if (Array.isArray(arg)) {
  			classes.push(classNames.apply(null, arg));
  		} else if (argType === 'object') {
  			for (var key in arg) {
  				if (hasOwn.call(arg, key) && arg[key]) {
  					classes.push(key);
  				}
  			}
  		}
  	}

  	return classes.join(' ');
  }

  var Button = function (_React$Component) {
      inherits(Button, _React$Component);

      function Button() {
          classCallCheck(this, Button);
          return possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
      }

      createClass(Button, [{
          key: 'render',
          value: function render() {
              var _props = this.props,
                  component = _props.component,
                  type = _props.type,
                  size = _props.size,
                  plain = _props.plain,
                  className = _props.className,
                  children = _props.children,
                  others = objectWithoutProperties(_props, ['component', 'type', 'size', 'plain', 'className', 'children']);

              var Component = component ? component : this.props.href || type === 'vcode' ? 'a' : 'button';
              var cls = type === 'vcode' ? classNames('bat-vcode-btn', defineProperty({}, className, className)) : classNames(defineProperty({
                  'bat-btn': true,
                  'bat-btn_mini': size === 'small',
                  'bat-btn_primary': type === 'primary' && !plain,
                  'bat-btn_default': type === 'default' && !plain,
                  'bat-btn_warn': type === 'warn',
                  'bat-btn_plain-primary': type === 'primary' && plain,
                  'bat-btn_plain-default': type === 'default' && plain,
                  'bat-btn_disabled': this.props.disabled && !plain,
                  'bat-btn_plain-disabled': this.props.disabled && plain
              }, className, className));

              return React__default.createElement(
                  Component,
                  _extends({}, others, { className: cls }),
                  children,
                  ' test'
              );
          }
      }]);
      return Button;
  }(React__default.Component);

  Button.defaultProps = {
      disabled: false,
      type: 'primary',
      size: 'normal'
  };

  var ButtonArea = function (_Component) {
      inherits(ButtonArea, _Component);

      function ButtonArea() {
          classCallCheck(this, ButtonArea);
          return possibleConstructorReturn(this, (ButtonArea.__proto__ || Object.getPrototypeOf(ButtonArea)).apply(this, arguments));
      }

      createClass(ButtonArea, [{
          key: 'render',
          value: function render() {
              var _props = this.props,
                  direction = _props.direction,
                  children = _props.children,
                  className = _props.className;

              var cls = classNames(defineProperty({
                  'bat-btn-area': true,
                  'bat-btn-area_inline': direction === 'horizontal'
              }, className, className));

              return React__default.createElement(
                  'div',
                  { className: cls },
                  children
              );
          }
      }]);
      return ButtonArea;
  }(React.Component);

  ButtonArea.defaultProps = {
      direction: 'vertical'
  };

  var ButtonPreview = function ButtonPreview(props) {
      var className = props.className,
          primary = props.primary,
          children = props.children,
          others = objectWithoutProperties(props, ['className', 'primary', 'children']);

      var cls = classNames(defineProperty({
          'bat-form-preview__btn': true,
          'bat-form-preview__btn_default': !primary,
          'bat-form-preview__btn_primary': primary
      }, className, className));
      return React__default.createElement(
          'a',
          _extends({ className: cls }, others),
          children
      );
  };

  ButtonPreview.defaultProps = {
      primary: false
  };

  var index = {
      Button: Button,
      ButtonArea: ButtonArea,
      ButtonPreview: ButtonPreview,
      version: version
  };

  return index;

})));
