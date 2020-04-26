import * as React from "react";
import "./DemoPage.css";
import { Switch, Divider, Icon } from "antd";
import classNames from "classnames";
export interface DemoPageProps {
    className?: string;
    name: string;
    components: any[];
}

interface DemoPageState {
    showComponentBorder: boolean;
    showCode: boolean[];
}
class DemoPage extends React.Component<DemoPageProps, DemoPageState> {
    constructor(props: any) {
        super(props);
        this.state = {
            showComponentBorder: false,
            showCode: props.components.map((e: any) => false)
        };
    }

    renderCompoent = (Component: any, key: string) => {
        return (
            <div
                key={key}
                className={classNames(
                    "DemoPage-container",
                    {
                        "DemoPage-container-bordered": this.state
                            .showComponentBorder
                    },
                    this.props.className
                )}
            >
                <Component></Component>
            </div>
        );
    };

    switchCodeModeFunc = (n: number) => {
        return () => {
            this.setState({
                ...this.state,
                showCode: this.props.components.map((e, i: number) =>
                    i === n ? !this.state.showCode[i] : this.state.showCode[i]
                )
            });
        };
    };
    public render() {
        return (
            <div className={classNames(this.props.className)}>
                <h1>{this.props.name}</h1>
                <h3>
                    Show Component Border :
                    <Switch
                        onChange={checked =>
                            this.setState({ showComponentBorder: checked })
                        }
                    ></Switch>
                </h3>
                <div className="DemoPage-content">
                    {this.props.components.map((e, i: number) => {
                        return (
                            <div className="DemoPage-subsection" key={i}>
                                <div className="DemoPage-subsection-content">
                                    <h2>{e.title}</h2>
                                    <Divider />
                                    <div className="DemoPage-subsection-space">
                                        {this.renderCompoent(
                                            e.component,
                                            `${e.title}-${0}`
                                        )}
                                    </div>
                                    <Divider />
                                    <div className="DemoPage-subsection-extra">
                                        <Icon
                                            type="code"
                                            onClick={this.switchCodeModeFunc(i)}
                                        />
                                        {this.state.showCode[i] ? (
                                            <pre>
                                                <code>{e.code}</code>
                                            </pre>
                                        ) : null}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default DemoPage;
