import React from "react";
import SidePanel from "../..";
import { Button } from "antd";
export default function DefaultExpandSidePanel() {
    return (
        <SidePanel offset={"-80%"} defaultExpand={true}>
            <div className="side-panel-demo">
                <Button disabled>Side Panel</Button>
            </div>
        </SidePanel>
    );
}
