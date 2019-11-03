import React, { useState, RefObject } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Search, SidePanel, Crown } from ".";
import { Menu, Tooltip } from "antd";
import { Button, Slider } from "antd";
import DemoPage from "./DemoPage";
import packageJSON from "../package.json";
import SideNotification from "./SideNotification";
import DragPanel from "./DragPanel";

const counter = (n: number) => {
    const arr: number[] = [];
    for (let i = 0; i < n; i++) {
        arr.push(i);
    }

    return arr;
};
const data = {
    Search: {
        dataSource: counter(10).map(e => "AutoComplete " + e)
    }
};

const links = [
    "Home",
    "Search",
    "SidePanel",
    "Crown",
    "SideNotification",
    "DragPanel"
];
const crownRef: RefObject<any> = React.createRef();
const App: React.FC = () => {
    const [title, setTitle] = useState(
        window.location.pathname.substr(
            window.location.pathname.lastIndexOf("/") + 1
        )
    );
    return (
        <div>
            <Router basename={"/" + packageJSON.name}>
                <SidePanel
                    offset="-250px"
                    className="navigation"
                    trigger=".menu-btn"
                >
                    <Menu className="menu" selectedKeys={[title.toLowerCase()]}>
                        {links.map(e => (
                            <Menu.Item key={e.toLowerCase()}>
                                <Link to={"/" + e} onClick={() => setTitle(e)}>
                                    {e}
                                </Link>
                            </Menu.Item>
                        ))}
                    </Menu>
                    <div className="btn-group">
                        <Button className="menu-btn">Menu</Button>
                    </div>
                </SidePanel>
                <div className="app fixed-layout-content">
                    <Switch>
                        <Route path="/Search">
                            <DemoPage
                                className="normal"
                                name="Search"
                                components={[
                                    {
                                        title: "Basic Search",
                                        component: [
                                            <Search
                                                dataSource={
                                                    data.Search.dataSource
                                                }
                                            />,
                                            <Search
                                                size="large"
                                                dataSource={
                                                    data.Search.dataSource
                                                }
                                            />,
                                            <Search
                                                size="small"
                                                dataSource={
                                                    data.Search.dataSource
                                                }
                                            />
                                        ]
                                    },
                                    {
                                        title: "Search Line",
                                        component: (
                                            <Search
                                                type="line"
                                                dataSource={
                                                    data.Search.dataSource
                                                }
                                            />
                                        )
                                    },
                                    {
                                        title: "Search History",
                                        component: (
                                            <Search
                                                type="line"
                                                history="hisgeomap-example"
                                                render={(value: any) =>
                                                    `(${value})`
                                                }
                                                dataSource={
                                                    data.Search.dataSource
                                                }
                                            />
                                        )
                                    }
                                ]}
                            />
                        </Route>
                        <Route path="/SidePanel">
                            <DemoPage
                                className="large absolute"
                                name="SidePanel  (Will be Deprecated)"
                                components={[
                                    {
                                        title: "Basic SidePanel",
                                        component: (
                                            <SidePanel
                                                offset={"-80%"}
                                                forbidList={["ant-slider"]}
                                            >
                                                <div className="side-panel-demo">
                                                    <Button>Side Panel</Button>
                                                    <Slider />
                                                    <Search
                                                        type="line"
                                                        placeholder="Search"
                                                        dataSource={
                                                            data.Search
                                                                .dataSource
                                                        }
                                                    />
                                                </div>
                                            </SidePanel>
                                        )
                                    },
                                    {
                                        title: "SidePanel Trigger",
                                        component: (
                                            <SidePanel
                                                offset={"-80%"}
                                                trigger=".side-panel-trigger"
                                            >
                                                <div className="side-panel-demo">
                                                    <Button disabled>
                                                        Side Panel
                                                    </Button>
                                                    <Button className="side-panel-trigger">
                                                        Trigger
                                                    </Button>
                                                </div>
                                            </SidePanel>
                                        )
                                    },
                                    {
                                        title: "SidePanel Default Expand",
                                        component: (
                                            <SidePanel
                                                offset={"-80%"}
                                                defaultExpand={true}
                                            >
                                                <div className="side-panel-demo">
                                                    <Button disabled>
                                                        Side Panel
                                                    </Button>
                                                </div>
                                            </SidePanel>
                                        )
                                    }
                                ]}
                            />
                        </Route>
                        <Route path="/Crown">
                            <DemoPage
                                name="Crown"
                                components={[
                                    {
                                        title: "Basic Crown",
                                        component: (
                                            <Crown
                                                components={counter(20).map(
                                                    e => (
                                                        <div className="crown-box">
                                                            {e}
                                                        </div>
                                                    )
                                                )}
                                            ></Crown>
                                        )
                                    },
                                    {
                                        title: "Crown with ToolTip",
                                        component: (
                                            <Crown
                                                components={counter(20).map(
                                                    e => (
                                                        <div
                                                            className="crown-box"
                                                            ref={crownRef}
                                                        >
                                                            <Tooltip title="Tooltip">
                                                                <div className="crown-box-content">
                                                                    {e}
                                                                </div>
                                                            </Tooltip>
                                                        </div>
                                                    )
                                                )}
                                            ></Crown>
                                        )
                                    }
                                ]}
                            ></DemoPage>
                        </Route>
                        <Route path="/SideNotification">
                            <DemoPage
                                name="SideNotification"
                                components={[
                                    {
                                        title: "Basic SideNotification",
                                        component: <SideNotification />
                                    }
                                ]}
                            />
                        </Route>
                        <Route path="/DragPanel">
                            <DemoPage
                                className="large absolute"
                                name="DragPanel"
                                components={[
                                    {
                                        title: "Basic DragPanel",
                                        component: [
                                            <DragPanel direction="vertical">
                                                <Button>Drag Panel</Button>
                                                <Slider />
                                            </DragPanel>
                                        ]
                                    },
                                    {
                                        title: "DragPanel - State Control",
                                        component: [
                                            <div>
                                                <DragPanel
                                                    direction="vertical"
                                                    states={[
                                                        ["0", "0"],
                                                        ["0", "40%"],
                                                        ["20%", "70%"]
                                                    ]}
                                                    defaultState={2}
                                                />
                                                <DragPanel
                                                    className="DragPanel-demo-backgound"
                                                    direction="vertical"
                                                    states={[
                                                        ["0", "0"],
                                                        ["0", "40%"],
                                                        ["20%", "70%"]
                                                    ]}
                                                    defaultState={2}
                                                />
                                            </div>
                                        ]
                                    },
                                    {
                                        title: "DragPanel - Horizontal",
                                        component: [
                                            <DragPanel
                                                direction="horizontal"
                                                states={[
                                                    ["0", "0"],
                                                    ["50%", "0%"],
                                                    ["90%", "0%"]
                                                ]}
                                                defaultState={1}
                                            />
                                        ]
                                    },
                                    {
                                        title: "DragPanel - Handle",
                                        component: [
                                            <div>
                                                <DragPanel
                                                    direction="vertical"
                                                    states={[
                                                        ["0%", "0"],
                                                        ["0%", "40%"],
                                                        ["0%", "90%"]
                                                    ]}
                                                    handle=".DragPanel-demo-handle"
                                                    defaultState={2}
                                                >
                                                    <Button className="DragPanel-demo-handle">
                                                        Handle
                                                    </Button>
                                                </DragPanel>
                                                <DragPanel
                                                    direction="vertical"
                                                    handle=".DragPanel-demo-handle2"
                                                    className="DragPanel-demo-backgound"
                                                >
                                                    <Button className="DragPanel-demo-handle2">
                                                        Handle
                                                    </Button>
                                                </DragPanel>
                                            </div>
                                        ]
                                    },
                                    {
                                        title: "DragPanel - Trigger",
                                        component: [
                                            <div>
                                                <DragPanel
                                                    direction="vertical"
                                                    states={[
                                                        ["0", "0"],
                                                        ["0", "40%"],
                                                        ["0%", "90%"]
                                                    ]}
                                                    trigger=".DragPanel-demo-trigger"
                                                    onTrigger={() => 1}
                                                    defaultState={2}
                                                >
                                                    <Button className="DragPanel-demo-trigger">
                                                        Trigger
                                                    </Button>
                                                </DragPanel>
                                                <DragPanel
                                                    direction="horizontal"
                                                    className="DragPanel-demo-backgound"
                                                    states={[
                                                        ["0%", "0"],
                                                        ["20%", "0%"],
                                                        ["40%", "0%"]
                                                    ]}
                                                    trigger=".DragPanel-demo-trigger2"
                                                    onTrigger={() => 1}
                                                    defaultState={0}
                                                >
                                                    <Button className="DragPanel-demo-trigger2">
                                                        Trigger
                                                    </Button>
                                                </DragPanel>
                                            </div>
                                        ]
                                    }
                                ]}
                            />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
