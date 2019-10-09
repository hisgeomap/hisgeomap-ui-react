import * as React from "react";
import "./SideNotification.css";
import { ButtonProps } from "antd/lib/button";
interface SideNotificationProps extends ButtonProps {
    single?: boolean;
    message?: any;
    className?: string;
}
declare class SideNotification extends React.Component<SideNotificationProps, any> {
    open: boolean;
    static defaultProps: {
        single: boolean;
        shape: string;
        message: {
            duration: number;
            message: string;
            description: JSX.Element;
            onClick: () => void;
        };
    };
    notify: () => void;
    render(): JSX.Element;
}
export default SideNotification;
