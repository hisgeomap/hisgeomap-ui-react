import React from "react";
import EditableText from "../..";
export default function BasicEditableText() {
    return (React.createElement("h1", null,
        "Please ",
        React.createElement(EditableText, { placeholder: "Edit Here" }),
        ". Thank you."));
}
