import React from "react";
import DemoPage from "../../DemoPage";
export default function CrownDemo() {
    return (React.createElement(DemoPage, { name: "Crown", components: [
        // {
        //     title: "Basic Crown",
        //     component: (
        //         <Crown
        //             components={counter(20).map(e => (
        //                 <div className="crown-box">{e}</div>
        //             ))}
        //         ></Crown>
        //     )
        // },
        // {
        //     title: "Crown with ToolTip",
        //     component: (
        //         <Crown
        //             components={counter(20).map(e => (
        //                 <div className="crown-box" ref={crownRef}>
        //                     <Tooltip title="Tooltip">
        //                         <div className="crown-box-content">
        //                             {e}
        //                         </div>
        //                     </Tooltip>
        //                 </div>
        //             ))}
        //         ></Crown>
        //     )
        // }
        ] }));
}
