import React from "react";
import DragPanel from "../..";

export default function StateControlDragPanel() {
    return (
        <>
            <DragPanel
                direction="vertical"
                states={[["0", "0"], ["0", "40%"], ["20%", "70%"]]}
                defaultState={2}
            />
            <DragPanel
                className="DragPanel-demo-backgound"
                direction="vertical"
                states={[["0", "0"], ["0", "40%"], ["20%", "70%"]]}
                defaultState={2}
            />
        </>
    );
}
