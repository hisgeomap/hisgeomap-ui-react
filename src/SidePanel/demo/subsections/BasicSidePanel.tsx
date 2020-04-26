import React from "react";
import SidePanel from "../..";
import { Button, Slider } from "antd";
export default function BasicSidePanel() {
    return (
        <SidePanel offset={"-80%"} forbidList={["ant-slider"]}>
            <div className="side-panel-demo">
                <Button>Side Panel</Button>
                <Slider />
            </div>
        </SidePanel>
    );
}
