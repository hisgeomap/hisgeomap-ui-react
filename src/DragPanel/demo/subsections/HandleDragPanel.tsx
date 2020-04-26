import React from "react";
import DragPanel from "../..";
import { Button } from "antd";

export default function HandleDragPanel() {
    return (
        <div>
            <DragPanel
                direction="vertical"
                states={[["0%", "0"], ["0%", "40%"], ["0%", "90%"]]}
                handle=".DragPanel-demo-handle"
                defaultState={2}
            >
                <Button className="DragPanel-demo-handle">Handle</Button>
            </DragPanel>
            <DragPanel
                direction="vertical"
                handle=".DragPanel-demo-handle2"
                className="DragPanel-demo-backgound"
            >
                <Button className="DragPanel-demo-handle2">Handle</Button>
            </DragPanel>
        </div>
    );
}
