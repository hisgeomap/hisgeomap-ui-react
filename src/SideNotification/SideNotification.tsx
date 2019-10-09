import * as React from "react";
import { Button, notification } from "antd";
import classNames from "classnames";
import "./SideNotification.css";
import { ButtonProps } from "antd/lib/button";
interface SideNotificationProps extends ButtonProps {
    single?: boolean;
    message?: any;
    className?: string;
}
class SideNotification extends React.Component<SideNotificationProps, any> {
    open: boolean = false;
    static defaultProps = {
        single: true,
        shape: "circle",
        message: {
            duration: 20,
            message: "常见问题",
            description: (
                <p>
                    年份有问题？数据不正确？浏览器不兼容？
                    非常抱歉，太史古卷还是一个很稚嫩的项目，我们非常需要您宝贵的建议和指正，希望您能谅解。若是您发现任何错误和疏忽，请您立刻通知我们，我们会马上进行改正。
                    我们的联系方式是
                    <br />
                    <br />
                    <a
                        className="slider-bar-contact"
                        href="mailto:hisgeomap@gmail.com"
                    >
                        hisgeomap@gmail.com
                    </a>
                    <br />
                    <br />
                    非常感谢您的耐心与帮助！
                </p>
            ),
            onClick: () => {}
        }
    };
    notify = () => {
        if (this.props.single) {
            if (!this.open) {
                this.open = true;
                notification.open({
                    ...this.props.message,
                    onClose: () => {
                        this.open = false;
                    }
                });
            }
        } else {
            notification.open(this.props.message);
        }
    };

    public render() {
        return (
            <Button
                {...this.props}
                className={classNames("Notification-btn", this.props.className)}
                onClick={this.notify}
            >
                ?
            </Button>
        );
    }
}

export default SideNotification;
