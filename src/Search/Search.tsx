import * as React from "react";
import { AutoComplete, Tag } from "antd";
import "./Search.css";
import classNames from "classnames";
import { AutoCompleteProps } from "antd/lib/auto-complete";

export interface SearchProps extends AutoCompleteProps {
    type?: "line" | "block";
    history?: string;
    render?: Function;
    onClose?: Function;
}

interface SearchState {
    history: string[];
    value: string;
}

class SearchHistoryLS {
    size: number;
    className?: string;
    data: string[];

    constructor(className?: string, size: number = 10) {
        this.size = size;
        this.className = className;
        if (className) {
            const data = localStorage.getItem(className);
            if (!data) {
                this.data = [];
                localStorage.setItem(className, JSON.stringify(this.data));
            } else {
                this.data = JSON.parse(data);
            }
        } else {
            this.data = [];
        }
    }

    add(data: string) {
        if (this.className) {
            const str = data.trim();
            this.remove(str);
            this.data.unshift(str);
            this.data.length > this.size && this.data.pop();
            localStorage.setItem(this.className, JSON.stringify(this.data));
        }
    }

    remove(data: string) {
        this.data = this.data.filter(e => e !== data);
    }
}

class Search extends React.Component<SearchProps, SearchState> {
    dataManager = new SearchHistoryLS(this.props.history);
    state = {
        history: this.dataManager.data,
        value: ""
    };

    onCloseHandle = (value: string) => {
        return (e: any) => {
            e.preventDefault();
            e.stopPropagation();
            this.dataManager.remove(value);
            this.props.onClose && this.props.onClose(e);
            this.setState({ ...this.state, history: this.dataManager.data });
        };
    };

    onSelect = (value: any, options: any, fromHistory?: boolean) => {
        this.dataManager.add(value);
        this.props.onSelect && this.props.onSelect(value, {});
        this.setState({
            ...this.state,
            history: this.dataManager.data,
            value: this.props.render ? this.props.render(value) : value
        });
    };

    onClickHandle = (value: string) => {
        return () => {
            this.onSelect(value, true);
        };
    };

    onChange = (value: any) => {
        this.setState({ ...this.state, value });
        this.props.onChange && this.props.onChange(value);
    };

    public render() {
        return (
            <div className={classNames("Search", this.props.className)}>
                <AutoComplete
                    {...this.props}
                    onSelect={this.onSelect}
                    value={this.state.value}
                    onChange={this.onChange}
                    className={classNames("SearchInput", {
                        SearchLine: this.props.type === "line"
                    })}
                />

                <div className="SearchHistory">
                    {this.state.history.map((e, i) => (
                        <Tag
                            className="SearchHistory-tag"
                            key={e + i}
                            closable
                            onClick={this.onClickHandle(e)}
                            onClose={this.onCloseHandle(e)}
                        >
                            {this.props.render ? this.props.render(e) : e}
                        </Tag>
                    ))}
                </div>
            </div>
        );
    }
}
export default Search;
