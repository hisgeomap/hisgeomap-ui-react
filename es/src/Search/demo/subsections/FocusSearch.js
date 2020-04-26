import React, { useRef } from "react";
import { Search } from "../../..";
import { Button } from "antd";
const data = [
    "AutoComplete 1",
    "AutoComplete 2",
    "AutoComplete 3",
    "AutoComplete 4",
    "AutoComplete 5",
    "AutoComplete 6",
    "AutoComplete 7",
    "AutoComplete 8",
    "AutoComplete 9",
    "AutoComplete 10"
];
export default function FocusSearch() {
    const ref = useRef(null);
    return (React.createElement("div", null,
        React.createElement(Search, { type: "line", defaultValue: "dasf", value: "dasf", ref: ref, dataSource: data }),
        React.createElement(Button, { onClick: () => ref.current && ref.current.focus() }, "Focus")));
}
