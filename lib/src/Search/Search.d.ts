import * as React from "react";
import "./Search.css";
import { AutoCompleteProps } from "antd/lib/auto-complete";
export interface SearchProps extends AutoCompleteProps {
    type?: "line" | "block";
    history?: string;
    historyRender?: Function;
    onClose?: Function;
}
interface SearchState {
    history: string[];
    value: string;
}
declare class SearchHistoryLS {
    size: number;
    className?: string;
    data: string[];
    constructor(className?: string, size?: number);
    add(data: string): void;
    remove(data: string): void;
}
declare class Search extends React.Component<SearchProps, SearchState> {
    dataManager: SearchHistoryLS;
    state: {
        history: string[];
        value: string;
    };
    onCloseHandle: (value: string) => (e: any) => void;
    onSelect: (value: any) => void;
    onClickHandle: (value: string) => () => void;
    onChange: (value: any) => void;
    render(): JSX.Element;
}
export default Search;
