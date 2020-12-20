import React, { CSSProperties } from 'react';
import { WidthProvider, Responsive } from "react-grid-layout";
import _ from "lodash";

const ResponsiveReactGridLayout = WidthProvider(Responsive);


export default class Room extends React.PureComponent<any, any>  {
    static defaultProps = {
        className: "layout",
        cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
        rowHeight: 50
    };

    constructor(props: any) {
        super(props);

        this.state = {
            items: ["jeff", "megan", "steph"].map(function (i, key, list) {
                return {
                    i: i.toString(),
                    x: 1,
                    y: 0,
                    w: 2,
                    h: 1,
                };
            }),
            newCounter: 0
        };

        this.onAddItem = this.onAddItem.bind(this);
        this.onBreakpointChange = this.onBreakpointChange.bind(this);
    }

    createElement(el: any) {
        const removeStyle: CSSProperties = {
            position: "absolute",
            right: "2px",
            top: 0,
            cursor: "pointer"
        };

        return (
            <div key={ el.i} data-grid={el}>
                { (
                        <span className="text">{ el.i}</span>
                    )}
                <span
                    className="remove"
                    style={removeStyle}
                    onClick={this.onRemoveItem.bind(this,  el.i)}
                >
                    x
            </span>
            </div>
        );
    }

    onAddItem() {
        /*eslint no-console: 0*/
        console.log("adding", "n" + this.state.newCounter);
        this.setState({
            // Add a new item. It must have a unique key!
            items: this.state.items.concat({
                i: "n" + this.state.newCounter,
                x: (this.state.items.length * 2) % (this.state.cols || 12),
                y: Infinity, // puts it at the bottom
                w: 2,
                h: 1
            }),
            // Increment the counter to ensure key is always unique.
            newCounter: this.state.newCounter + 1
        });
    }

    // We're using the cols coming back from this to calculate where to add new items.
    onBreakpointChange(breakpoint: any, cols: any) {
        this.setState({
            breakpoint: breakpoint,
            cols: cols
        });
    }

    // onLayoutChange(layout: any) {
    //     this.props.onLayoutChange(layout);
    //     this.setState({ layout: layout });
    // }

    onRemoveItem(i: any) {
        console.log("removing", i);
        this.setState({ items: _.reject(this.state.items, { i: i }) });
    }

    render() {
        console.log(this.state.items)
        return (
            <div>

                <div className="dropdown">
                    <button onClick={this.onAddItem} className="dropbtn">Add Staff</button>
                    <div id="myDropdown" className="dropdown-content">
                    </div>
                </div>

                <ResponsiveReactGridLayout
                    // onLayoutChange={this.onLayoutChange}
                    onBreakpointChange={this.onBreakpointChange}
                    {...this.props}
                >
                    {_.map(this.state.items, el => this.createElement(el))}
                </ResponsiveReactGridLayout>
            </div>
        );
    }
}

