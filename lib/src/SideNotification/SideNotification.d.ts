import * as React from "react";
import "./SideNotification.css";
interface SideNotificationProps {
    single?: boolean;
    message?: any;
    className?: string;
}
declare class SideNotification extends React.Component<SideNotificationProps, any> {
    open: boolean;
    static defaultProps: {
        single: boolean;
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
