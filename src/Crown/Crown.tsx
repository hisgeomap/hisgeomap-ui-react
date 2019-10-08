import * as React from "react";
import classNames from "classnames";
import "./Crown.css";
interface CrownProps {
    className?: string;
    width?: string | number;
    components: any[];
    speed?: number;
}
interface CrownState {}
class Crown extends React.Component<CrownProps, CrownState> {
    ref: React.RefObject<any> = React.createRef();
    timer?: NodeJS.Timeout;
    animation?: number;
    isAnimated: boolean = false;
    speed: number = this.props.speed === undefined ? 10 : this.props.speed;

    animate = (
        speed: number,
        dest: number,
        positive: boolean,
        setValue: Function,
        getValue: Function,
        last?: number
    ) => {
        this.isAnimated = true;
        const component = this.ref.current;
        if (component) {
            this.animation = requestAnimationFrame(() => {
                const cur = getValue();
                if (last === cur) {
                    return;
                }
                const velocity = positive ? speed : -speed;
                if ((positive && cur < dest) || (!positive && cur > dest)) {
                    const value = cur + velocity;
                    setValue(value);
                    this.animate(
                        speed,
                        dest,
                        positive,
                        setValue,
                        getValue,
                        cur
                    );
                } else {
                    setValue(dest);
                    this.isAnimated = false;
                }
            });
        }
    };

    center = (clientX?: number) => {
        const component = this.ref.current;
        if (component) {
            const box = component.getBoundingClientRect();
            const nodes = component.childNodes[0].childNodes;
            const pos =
                clientX === undefined ? box.left + box.width / 2 : clientX;
            let nodeBox;
            for (let i = 0; i < nodes.length; i++) {
                nodeBox = nodes[i].getBoundingClientRect();
                if (nodeBox.left >= pos) {
                    break;
                }
            }
            const offsetLeft =
                nodeBox.left -
                box.left +
                component.scrollLeft -
                box.width / 2 -
                nodeBox.width / 2;
            this.animate(
                clientX === undefined ? this.speed / 5 : this.speed,
                offsetLeft,
                offsetLeft > component.scrollLeft,
                (value: number) => (component.scrollLeft = value),
                () => component.scrollLeft
            );
        }
    };
    onClick = (e: any) => {
        this.reset();
        this.center(e.clientX);
    };

    reset = () => {
        this.timer !== undefined && clearTimeout(this.timer);
    };

    onScroll = (e: any) => {
        this.reset();
        this.timer = setTimeout(() => {
            this.center();
        }, 200);
    };
    public render() {
        return (
            <div
                className={classNames("Crown", this.props.className)}
                style={{ width: this.props.width }}
                ref={this.ref}
                onWheel={this.onScroll}
                // onScroll={this.onScroll}
            >
                <div className="Crown-wrap" onClick={this.onClick}>
                    {this.props.components.map((e, i: number) => {
                        return (
                            <div className="Crown-element" key={i}>
                                {e}
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Crown;
