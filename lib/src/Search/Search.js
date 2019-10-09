"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var antd_1 = require("antd");
require("./Search.css");
var classnames_1 = __importDefault(require("classnames"));
var SearchHistoryLS = /** @class */ (function () {
    function SearchHistoryLS(className, size) {
        if (size === void 0) { size = 10; }
        this.size = size;
        this.className = className;
        if (className) {
            var data = localStorage.getItem(className);
            if (!data) {
                this.data = [];
                localStorage.setItem(className, JSON.stringify(this.data));
            }
            else {
                this.data = JSON.parse(data);
            }
        }
        else {
            this.data = [];
        }
    }
    SearchHistoryLS.prototype.add = function (data) {
        if (this.className) {
            var str = data.trim();
            this.remove(str);
            this.data.unshift(str);
            this.data.length > this.size && this.data.pop();
            localStorage.setItem(this.className, JSON.stringify(this.data));
        }
    };
    SearchHistoryLS.prototype.remove = function (data) {
        this.data = this.data.filter(function (e) { return e !== data; });
    };
    return SearchHistoryLS;
}());
var Search = /** @class */ (function (_super) {
    __extends(Search, _super);
    function Search() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.dataManager = new SearchHistoryLS(_this.props.history);
        _this.state = {
            history: _this.dataManager.data,
            value: ""
        };
        _this.onCloseHandle = function (value) {
            return function (e) {
                e.preventDefault();
                e.stopPropagation();
                _this.dataManager.remove(value);
                _this.props.onClose && _this.props.onClose(e);
                _this.setState(__assign(__assign({}, _this.state), { history: _this.dataManager.data }));
            };
        };
        _this.onSelect = function (value, options, fromHistory) {
            _this.dataManager.add(value);
            _this.props.onSelect && _this.props.onSelect(value, {});
            _this.setState(__assign(__assign({}, _this.state), { history: _this.dataManager.data, value: _this.props.render ? _this.props.render(value) : value }));
        };
        _this.onClickHandle = function (value) {
            return function () {
                _this.onSelect(value, true);
            };
        };
        _this.onChange = function (value) {
            _this.setState(__assign(__assign({}, _this.state), { value: value }));
            _this.props.onChange && _this.props.onChange(value);
        };
        return _this;
    }
    Search.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: classnames_1.default("Search", this.props.className) },
            React.createElement(antd_1.AutoComplete, __assign({}, this.props, { onSelect: this.onSelect, value: this.state.value, onChange: this.onChange, className: classnames_1.default("SearchInput", {
                    SearchLine: this.props.type === "line"
                }) })),
            React.createElement("div", { className: "SearchHistory" }, this.state.history.map(function (e, i) { return (React.createElement(antd_1.Tag, { className: "SearchHistory-tag", key: e + i, closable: true, onClick: _this.onClickHandle(e), onClose: _this.onCloseHandle(e) }, _this.props.render ? _this.props.render(e) : e)); }))));
    };
    return Search;
}(React.Component));
exports.default = Search;
