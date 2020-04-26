import React, { useState, RefObject, useRef } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
    Search,
    SidePanel,
    Crown,
    SideNotification,
    DragPanel,
    EditableText
} from ".";
import { Menu, Tooltip } from "antd";
import { Button, Slider } from "antd";
import DemoPage from "./DemoPage";
import packageJSON from "../package.json";
import DragPanelDemo from "./DragPanel/demo/DragPanel.demo";
import SidePanelDemo from "./SidePanel/demo/SidePanel.demo";
import SideNotificationDemo from "./SideNotification/demo/SideNotification.demo";
import SearchDemo from "./Search/demo/Search.demo";
import EditableTextDemo from "./EditableText/demo/EditableText.demo";
import CrownDemo from "./Crown/demo/Crown.demo";

const links = [
    "Home",
    "Search",
    "SidePanel",
    // "Crown",
    "SideNotification",
    "DragPanel",
    "EditableText"
];
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
                            <SearchDemo />
                        </Route>
                        <Route path="/SidePanel">
                            <SidePanelDemo />
                        </Route>
                        {/* <Route path="/Crown">
                            <CrownDemo />
                        </Route> */}
                        <Route path="/SideNotification">
                            <SideNotificationDemo />
                        </Route>
                        <Route path="/DragPanel">
                            <DragPanelDemo />
                        </Route>
                        <Route path="/EditableText">
                            <EditableTextDemo />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
