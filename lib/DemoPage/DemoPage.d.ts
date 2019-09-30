import * as React from "react";
import "./DemoPage.css";
export interface DemoPageProps {
    className: string;
    name: string;
    components: any[];
}
interface DemoPageState {
    showComponentBorder: boolean;
}
declare class DemoPage extends React.Component<DemoPageProps, DemoPageState> {
    state: {
        showComponentBorder: boolean;
    };
    renderCompoent: (component: any, key: string) => JSX.Element;
    render(): JSX.Element;
}
export default DemoPage;
