import React from "react";
import EditableText from "../..";

export default function NumberEditableText() {
    return (
        <h1>
            Please <EditableText type="Number" placeholder={1}></EditableText>.
            Thank you.
        </h1>
    );
}
