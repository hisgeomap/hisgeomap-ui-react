import React from "react";
import SidePanel from "../..";
import { Button } from "antd";
export default function TriggerSidePanel() {
    return (
        <SidePanel offset={"-80%"} trigger=".side-panel-trigger">
            <div className="side-panel-demo">
                <Button disabled>Side Panel</Button>
                <Button className="side-panel-trigger">Trigger</Button>
            </div>
        </SidePanel>
    );
}
