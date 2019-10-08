"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var enzyme_1 = require("enzyme");
var DemoPage_1 = __importDefault(require("./DemoPage"));
describe('<DemoPage />', function () {
    test('renders', function () {
        var wrapper = enzyme_1.shallow(React.createElement(DemoPage_1.default, null));
        expect(wrapper).toMatchSnapshot();
    });
});
