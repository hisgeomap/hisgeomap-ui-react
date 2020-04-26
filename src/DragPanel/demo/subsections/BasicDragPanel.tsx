import React from "react";
import DragPanel from "../..";
import { Button, Slider } from "antd";

export default function BasicDragPanel() {
    return (
        <DragPanel direction="vertical">
            <Button>Drag Panel</Button>
            <Slider onChange={() => {}} />
        </DragPanel>
    );
}
