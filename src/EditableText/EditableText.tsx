import * as React from "react";
import className from "classnames";
import "./EditableText.css";
import { InputNumber, Input } from "antd";

interface EditableTextProps {
    className?: string;
    type?: "Number" | "Text";
    placeholder?: string | number;
    onChange?: Function;
}

class EditableText extends React.Component<EditableTextProps, any> {
    state = {
        editing: false,
        value: this.props.placeholder
    };

    ref: React.RefObject<any> = React.createRef();

    renderEditable = () => {
        const onBlur = () => {
            if (
                typeof this.state.value === "string" &&
                this.state.value.trim() === ""
            ) {
                return;
            }
            this.setState({ ...this.state, editing: false });
        };

        const onChange = (e: any) => {
            this.setState({ ...this.state, value: e.target.value });
        };

        const attrs = {
            onBlur,
            onPressEnter: onBlur,
            onChange,
            ref: this.ref
        };
        switch (this.props.type) {
            case "Number":
                return (
                    <InputNumber
                        value={Number(this.state.value)}
                        {...attrs}
                    ></InputNumber>
                );
            default:
                return <Input value={this.state.value} {...attrs}></Input>;
        }
    };
    public render() {
        return (
            <span
                className={className("EditableText", this.props.className)}
                onClick={() => {
                    this.setState({ ...this.state, editing: true });
                    this.ref.current && this.ref.current.focus();
                }}
            >
                <span
                    className={className("EditableText-text", {
                        fadeIn: !this.state.editing,
                        fadeOut: this.state.editing
                    })}
                >
                    {this.state.value}
                </span>
                <div
                    className={className("EditableText-editable", {
                        fadeIn: this.state.editing,
                        fadeOut: !this.state.editing
                    })}
                >
                    {this.renderEditable()}
                </div>
            </span>
        );
    }
}

export default EditableText;
