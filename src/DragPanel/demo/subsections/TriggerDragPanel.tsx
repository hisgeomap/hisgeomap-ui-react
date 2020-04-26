import React from "react";
import DragPanel from "../..";
import { Button } from "antd";

export default function TriggerDragPanel() {
    return (
        <div>
            <DragPanel
                direction="vertical"
                states={[["0", "0"], ["0", "40%"], ["0%", "90%"]]}
                trigger=".DragPanel-demo-trigger"
                onTrigger={() => 1}
                defaultState={2}
            >
                <Button className="DragPanel-demo-trigger">Trigger</Button>
            </DragPanel>
            <DragPanel
                direction="horizontal"
                className="DragPanel-demo-backgound"
                states={[["0%", "0"], ["20%", "0%"], ["40%", "0%"]]}
                trigger=".DragPanel-demo-trigger2"
                onTrigger={() => 1}
                defaultState={0}
            >
                <Button className="DragPanel-demo-trigger2">Trigger</Button>
            </DragPanel>
        </div>
    );
}
