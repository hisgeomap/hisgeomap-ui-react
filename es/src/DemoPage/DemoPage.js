import * as React from "react";
import "./DemoPage.css";
import { Switch, Divider } from "antd";
import classNames from "classnames";
class DemoPage extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            showComponentBorder: false
        };
        this.renderCompoent = (component, key) => {
            return (React.createElement("div", { key: key, className: classNames("DemoPage-container", {
                    "DemoPage-container-bordered": this.state
                        .showComponentBorder
                }, this.props.className) }, component));
        };
    }
    render() {
        return (React.createElement("div", { className: classNames(this.props.className) },
            React.createElement("h1", null, this.props.name),
            React.createElement("h3", null,
                "Show Component Border :",
                React.createElement(Switch, { onChange: checked => this.setState({ showComponentBorder: checked }) })),
            React.createElement("div", { className: "DemoPage-content" }, this.props.components.map((e, i) => {
                return (React.createElement("div", { className: "DemoPage-subsection", key: i },
                    React.createElement("div", { className: "DemoPage-subsection-content" },
                        React.createElement("h2", null, e.title),
                        React.createElement(Divider, null),
                        React.createElement("div", { className: "DemoPage-subsection-space" }, e.component instanceof Array
                            ? e.component.map((subCompoent, i) => this.renderCompoent(subCompoent, `${e.title}-${i}`))
                            : this.renderCompoent(e.component, `${e.title}-${0}`)))));
            }))));
    }
}
export default DemoPage;
