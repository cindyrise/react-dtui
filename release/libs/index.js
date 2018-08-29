'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _version = require('./version');

var _version2 = _interopRequireDefault(_version);

var _index = require('./components/button/index');

require('./style/dtui.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    Button: _index.Button,
    ButtonArea: _index.ButtonArea,
    ButtonPreview: _index.ButtonPreview,
    version: _version2.default
};
module.exports = exports['default'];