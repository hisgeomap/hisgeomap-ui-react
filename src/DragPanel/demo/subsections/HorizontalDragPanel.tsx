import React from "react";
import DragPanel from "../..";

export default function HorizontalDragPanel() {
    return (
        <DragPanel
            direction="horizontal"
            states={[["0", "0"], ["50%", "0%"], ["90%", "0%"]]}
            defaultState={1}
        />
    );
}
