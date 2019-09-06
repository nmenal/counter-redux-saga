import React, { Component } from "react";
import { connect } from "react-redux";

class Counter extends Component {
  render() {
    return (
      <React.Fragment>
        <button onClick={this.props.onIncrement}>Increment</button>{" "}
        {this.props.value}
        <button onClick={this.props.onDecrement}>Decrement</button>
        <button onClick={this.props.onIncrementAsync}>
          Increment Async
        </button>
      </React.Fragment>
    );
  }
}

const mapPropsToState = state => {
  return {
    value: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrement: () => {
      dispatch({ type: "INCREMENT" });
    },
    onDecrement: () => {
      dispatch({ type: "DECREMENT" });
    },
    onIncrementAsync: () => {
      dispatch({ type: "INCREMENT_ASYNC" });
    }
  };
};
export default connect(
  mapPropsToState,
  mapDispatchToProps
)(Counter);
