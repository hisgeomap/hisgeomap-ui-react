import React from "react";
import { Search } from "../../..";
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
export default function HistorySearch() {
    return (React.createElement(Search, { type: "line", history: "hisgeomap-example", render: (value) => `(${value})`, dataSource: data }));
}
