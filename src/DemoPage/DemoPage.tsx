import * as React from "react";
import "./DemoPage.css";
import { Switch, Divider } from "antd";
import classNames from "classnames";
export interface DemoPageProps {
    className?: string;
    name: string;
    components: any[];
}

interface DemoPageState {
    showComponentBorder: boolean;
}
class DemoPage extends React.Component<DemoPageProps, DemoPageState> {
    state = {
        showComponentBorder: false
    };

    renderCompoent = (component: any, key: string) => {
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
                {component}
            </div>
        );
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
                    {this.props.components.map((e, i) => {
                        return (
                            <div className="DemoPage-subsection" key={i}>
                                <div className="DemoPage-subsection-content">
                                    <h2>{e.title}</h2>
                                    <Divider />
                                    <div className="DemoPage-subsection-space">
                                        {e.component instanceof Array
                                            ? e.component.map(
                                                  (
                                                      subCompoent: any,
                                                      i: number
                                                  ) =>
                                                      this.renderCompoent(
                                                          subCompoent,
                                                          `${e.title}-${i}`
                                                      )
                                              )
                                            : this.renderCompoent(
                                                  e.component,
                                                  `${e.title}-${0}`
                                              )}
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
