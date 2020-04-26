import React from "react";
import DemoPage from "../../DemoPage";
import BasicEditableText from "./subsections/BasicEditableText";
import NumberEditableText from "./subsections/NumberEditableText";
import code from "./subsections/subsections.json";

const components = [
    {
        title: "Basic EditableText",
        component: BasicEditableText,
        code: code.BasicEditableText
    },
    {
        title: "Number EditableText",
        component: NumberEditableText,
        code: code.NumberEditableText
    }
];

export default function EditableTextDemo() {
    return (
        <DemoPage
            className="normal"
            name="EditableText"
            components={components}
        />
    );
}
