import * as React from "react";
import { Button, notification } from "antd";
import classNames from "classnames";
import "./SideNotification.css";
class SideNotification extends React.Component {
    constructor() {
        super(...arguments);
        this.open = false;
        this.notify = () => {
            if (this.props.single) {
                if (!this.open) {
                    this.open = true;
                    notification.open(Object.assign(Object.assign({}, this.props.message), { onClose: () => {
                            this.open = false;
                        } }));
                }
            }
            else {
                notification.open(this.props.message);
            }
        };
    }
    render() {
        return (React.createElement(Button, Object.assign({}, this.props, { className: classNames("Notification-btn", this.props.className), onClick: this.notify }), "?"));
    }
}
SideNotification.defaultProps = {
    single: true,
    shape: "circle",
    message: {
        duration: 20,
        message: "常见问题",
        description: (React.createElement("p", null,
            "\u5E74\u4EFD\u6709\u95EE\u9898\uFF1F\u6570\u636E\u4E0D\u6B63\u786E\uFF1F\u6D4F\u89C8\u5668\u4E0D\u517C\u5BB9\uFF1F \u975E\u5E38\u62B1\u6B49\uFF0C\u592A\u53F2\u53E4\u5377\u8FD8\u662F\u4E00\u4E2A\u5F88\u7A1A\u5AE9\u7684\u9879\u76EE\uFF0C\u6211\u4EEC\u975E\u5E38\u9700\u8981\u60A8\u5B9D\u8D35\u7684\u5EFA\u8BAE\u548C\u6307\u6B63\uFF0C\u5E0C\u671B\u60A8\u80FD\u8C05\u89E3\u3002\u82E5\u662F\u60A8\u53D1\u73B0\u4EFB\u4F55\u9519\u8BEF\u548C\u758F\u5FFD\uFF0C\u8BF7\u60A8\u7ACB\u523B\u901A\u77E5\u6211\u4EEC\uFF0C\u6211\u4EEC\u4F1A\u9A6C\u4E0A\u8FDB\u884C\u6539\u6B63\u3002 \u6211\u4EEC\u7684\u8054\u7CFB\u65B9\u5F0F\u662F",
            React.createElement("br", null),
            React.createElement("br", null),
            React.createElement("a", { className: "slider-bar-contact", href: "mailto:hisgeomap@gmail.com" }, "hisgeomap@gmail.com"),
            React.createElement("br", null),
            React.createElement("br", null),
            "\u975E\u5E38\u611F\u8C22\u60A8\u7684\u8010\u5FC3\u4E0E\u5E2E\u52A9\uFF01")),
        onClick: () => { }
    }
};
export default SideNotification;
