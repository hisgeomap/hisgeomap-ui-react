import * as React from "react";
import { AutoComplete, Tag } from "antd";
import "./Search.css";
import classNames from "classnames";
class SearchHistoryLS {
    constructor(className, size = 10) {
        this.size = size;
        this.className = className;
        if (className) {
            const data = localStorage.getItem(className);
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
    add(data) {
        if (this.className) {
            const str = data.trim();
            this.remove(str);
            this.data.unshift(str);
            this.data.length > this.size && this.data.pop();
            localStorage.setItem(this.className, JSON.stringify(this.data));
        }
    }
    remove(data) {
        this.data = this.data.filter(e => e !== data);
    }
}
class Search extends React.Component {
    constructor() {
        super(...arguments);
        this.dataManager = new SearchHistoryLS(this.props.history);
        this.state = {
            history: this.dataManager.data,
            value: ""
        };
        this.onCloseHandle = (value) => {
            return (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.dataManager.remove(value);
                this.props.onClose && this.props.onClose(e);
                this.setState(Object.assign(Object.assign({}, this.state), { history: this.dataManager.data }));
            };
        };
        this.onSelect = (value) => {
            this.dataManager.add(value);
            this.props.onSelect && this.props.onSelect(value, {});
            this.setState(Object.assign(Object.assign({}, this.state), { history: this.dataManager.data, value }));
        };
        this.onClickHandle = (value) => {
            return () => {
                this.onSelect(value);
            };
        };
        this.onChange = (value) => {
            this.setState(Object.assign(Object.assign({}, this.state), { value }));
            this.props.onChange && this.props.onChange(value);
        };
    }
    render() {
        return (React.createElement("div", { className: classNames("Search", this.props.className) },
            React.createElement(AutoComplete, Object.assign({}, this.props, { onSelect: this.onSelect, value: this.state.value, onChange: this.onChange, className: classNames("SearchInput", {
                    SearchLine: this.props.type === "line"
                }) })),
            React.createElement("div", { className: "SearchHistory" }, this.state.history.map((e, i) => (React.createElement(Tag, { className: "SearchHistory-tag", key: e + i, closable: true, onClick: this.onClickHandle(e), onClose: this.onCloseHandle(e) }, this.props.historyRender
                ? this.props.historyRender(e)
                : e))))));
    }
}
export default Search;
