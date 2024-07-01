import { count } from "console";
import React from "react";

class CounterWithClassComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  render() {
    console.log(this);
    const { count } = this.state;
    return (
      <button
        onClick={() =>
          this.setState({
            count: count + 1,
          })
        }
      >
        {count}
      </button>
    );
  }
}

export default CounterWithClassComponent;
