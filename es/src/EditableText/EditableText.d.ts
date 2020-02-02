import * as React from "react";
import "./EditableText.css";
interface EditableTextProps {
    className?: string;
    type?: "Number" | "Text";
    placeholder?: string | number;
    onChange?: Function;
}
declare class EditableText extends React.Component<EditableTextProps, any> {
    state: {
        editing: boolean;
        value: string | number | undefined;
    };
    ref: React.RefObject<any>;
    renderEditable: () => JSX.Element;
    render(): JSX.Element;
}
export default EditableText;
