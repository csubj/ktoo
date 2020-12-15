import React, { Component } from "react";
import PropTypes from "prop-types";
import Room from "./Room";

class Rooms extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
  };

  constructor(props) {
    super(props);

  }


  render() {
    const {
      props: { children },
    //   state: { activeTab },
    } = this;

    // console.log(children)

    return (
      <div className="rooms">
        <ul className="room-list">
          {children.map((child) => {
            const { label } = child.props;

            return (
              <Room
                key={label}
                label={label}
              />
            );
          })}
        </ul>
        <div className="room-content">
          {children.map((child) => {
            // if (child.props.label !== activeTab) return undefined;
            return child.props.children;
          })}
        </div>
      </div>
    );
  }
}

export default Rooms;