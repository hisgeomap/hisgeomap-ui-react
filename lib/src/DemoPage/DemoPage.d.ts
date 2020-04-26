import * as React from "react";
import "./DemoPage.css";
export interface DemoPageProps {
    className?: string;
    name: string;
    components: any[];
}
interface DemoPageState {
    showComponentBorder: boolean;
    showCode: boolean[];
}
declare class DemoPage extends React.Component<DemoPageProps, DemoPageState> {
    constructor(props: any);
    renderCompoent: (Component: any, key: string) => JSX.Element;
    switchCodeModeFunc: (n: number) => () => void;
    render(): JSX.Element;
}
export default DemoPage;
