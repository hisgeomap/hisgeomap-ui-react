import * as React from "react";
import classNames from "classnames";
import "./Crown.css";
class Crown extends React.Component {
    constructor() {
        super(...arguments);
        this.ref = React.createRef();
        this.isAnimated = false;
        this.speed = this.props.speed === undefined ? 10 : this.props.speed;
        this.animate = (speed, dest, positive, setValue, getValue, last) => {
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
                        this.animate(speed, dest, positive, setValue, getValue, cur);
                    }
                    else {
                        setValue(dest);
                        this.isAnimated = false;
                    }
                });
            }
        };
        this.center = (clientX) => {
            const component = this.ref.current;
            if (component) {
                const box = component.getBoundingClientRect();
                const nodes = component.childNodes[0].childNodes;
                const pos = clientX === undefined ? box.left + box.width / 2 : clientX;
                let nodeBox;
                for (let i = 0; i < nodes.length; i++) {
                    nodeBox = nodes[i].getBoundingClientRect();
                    if (nodeBox.left >= pos) {
                        break;
                    }
                }
                const offsetLeft = nodeBox.left -
                    box.left +
                    component.scrollLeft -
                    box.width / 2 -
                    nodeBox.width / 2;
                this.animate(clientX === undefined ? this.speed / 5 : this.speed, offsetLeft, offsetLeft > component.scrollLeft, (value) => (component.scrollLeft = value), () => component.scrollLeft);
            }
        };
        this.onClick = (e) => {
            this.reset();
            this.center(e.clientX);
        };
        this.reset = () => {
            this.timer !== undefined && clearTimeout(this.timer);
        };
        this.onScroll = (e) => {
            this.reset();
            this.timer = setTimeout(() => {
                this.center();
            }, 200);
        };
    }
    render() {
        return (React.createElement("div", { className: classNames("Crown", this.props.className), style: { width: this.props.width }, ref: this.ref, onWheel: this.onScroll },
            React.createElement("div", { className: "Crown-wrap", onClick: this.onClick }, this.props.components.map((e, i) => {
                return (React.createElement("div", { className: "Crown-element", key: i }, e));
            }))));
    }
}
export default Crown;
