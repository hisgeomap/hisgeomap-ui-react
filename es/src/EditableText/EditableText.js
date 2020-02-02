import * as React from "react";
import className from "classnames";
import "./EditableText.css";
import { InputNumber, Input } from "antd";
class EditableText extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            editing: false,
            value: this.props.placeholder
        };
        this.ref = React.createRef();
        this.renderEditable = () => {
            const onBlur = () => {
                if (typeof this.state.value === "string" &&
                    this.state.value.trim() === "") {
                    return;
                }
                this.setState(Object.assign(Object.assign({}, this.state), { editing: false }));
            };
            const onChange = (e) => {
                if (this.props.type === "Number") {
                    if (!isNaN(e)) {
                        this.setState(Object.assign(Object.assign({}, this.state), { value: e }));
                    }
                }
                else {
                    this.setState(Object.assign(Object.assign({}, this.state), { value: e.target.value }));
                }
            };
            const attrs = {
                onBlur,
                onPressEnter: onBlur,
                onChange,
                ref: this.ref
            };
            switch (this.props.type) {
                case "Number":
                    return (React.createElement(InputNumber, Object.assign({ value: Number(this.state.value) }, attrs)));
                default:
                    return React.createElement(Input, Object.assign({ value: this.state.value }, attrs));
            }
        };
    }
    render() {
        return (React.createElement("span", { className: className("EditableText", this.props.className), onClick: () => {
                this.setState(Object.assign(Object.assign({}, this.state), { editing: true }));
                this.ref.current && this.ref.current.focus();
            } },
            React.createElement("span", { className: className("EditableText-text", {
                    fadeIn: !this.state.editing,
                    fadeOut: this.state.editing
                }) }, this.state.value),
            React.createElement("div", { className: className("EditableText-editable", {
                    fadeIn: this.state.editing,
                    fadeOut: !this.state.editing
                }) }, this.renderEditable())));
    }
}
export default EditableText;
