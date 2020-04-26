import React from "react";
import DemoPage from "../../DemoPage";
import BasicSearch from "./subsections/BasicSearch";
import code from "./subsections/subsections.json";
import LineSearch from "./subsections/LineSearch";
import HistorySearch from "./subsections/HistorySearch";
import DefaultSearch from "./subsections/DefaultSearch";
import FocusSearch from "./subsections/FocusSearch";
const components = [
    {
        title: "Basic Search",
        component: BasicSearch,
        code: code.BasicSearch
    },
    {
        title: "Search Line",
        component: LineSearch,
        code: code.LineSearch
    },
    {
        title: "Search History",
        component: HistorySearch,
        code: code.HistorySearch
    },
    {
        title: "Default Value and Value",
        component: DefaultSearch,
        code: code.DefaultSearch
    },
    {
        title: "Focus",
        component: FocusSearch,
        code: code.FocusSearch
    }
];
export default function SearchDemo() {
    return (React.createElement(DemoPage, { className: "normal", name: "Search", components: components }));
}
