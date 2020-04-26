import React from "react";
import EditableText from "../..";
export default function NumberEditableText() {
    return (React.createElement("h1", null,
        "Please ",
        React.createElement(EditableText, { type: "Number", placeholder: 1 }),
        ". Thank you."));
}
