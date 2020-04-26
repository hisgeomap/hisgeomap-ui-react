import * as React from "react";
import "./DemoPage.css";
import { Switch, Divider, Icon } from "antd";
import classNames from "classnames";
class DemoPage extends React.Component {
    constructor(props) {
        super(props);
        this.renderCompoent = (Component, key) => {
            return (React.createElement("div", { key: key, className: classNames("DemoPage-container", {
                    "DemoPage-container-bordered": this.state
                        .showComponentBorder
                }, this.props.className) },
                React.createElement(Component, null)));
        };
        this.switchCodeModeFunc = (n) => {
            return () => {
                this.setState(Object.assign(Object.assign({}, this.state), { showCode: this.props.components.map((e, i) => i === n ? !this.state.showCode[i] : this.state.showCode[i]) }));
            };
        };
        this.state = {
            showComponentBorder: false,
            showCode: props.components.map((e) => false)
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
                        React.createElement("div", { className: "DemoPage-subsection-space" }, this.renderCompoent(e.component, `${e.title}-${0}`)),
                        React.createElement(Divider, null),
                        React.createElement("div", { className: "DemoPage-subsection-extra" },
                            React.createElement(Icon, { type: "code", onClick: this.switchCodeModeFunc(i) }),
                            this.state.showCode[i] ? (React.createElement("pre", null,
                                React.createElement("code", null, e.code))) : null))));
            }))));
    }
}
export default DemoPage;
