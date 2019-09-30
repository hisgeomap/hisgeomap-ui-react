import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Search, SidePanel } from ".";
import { Menu } from "antd";
import { Button, Slider } from "antd";
import DemoPage from "./DemoPage";

const data = {
    Search: {
        dataSource: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
            e => "AutoComplete " + e
        )
    }
};

const links = ["Home", "Search", "SidePanel"];

const App: React.FC = () => {
    const [title, setTitle] = useState(
        window.location.pathname.substr(
            window.location.pathname.lastIndexOf("/") + 1
        )
    );
    return (
        <div className="fixed-layout">
            <Router>
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
                                name="SidePanel"
                                components={[
                                    {
                                        title: "Basic SidePanel",
                                        component: (
                                            <SidePanel offset={"-80%"}>
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
