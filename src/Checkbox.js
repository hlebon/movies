import React from "react";
import ProTypes from "prop-types";
import checkSvg from "./assets/check.svg";

class Checkbox extends React.Component {
  state = {
    isChecked: false
  };

  componentDidMount() {
    this.setState({
      isChecked: this.props.status
    });
  }

  _onClick = () => {
    this.setState(
      currentState => ({ isChecked: !currentState.isChecked }),
      () => {
        if (this.props.onCheck) {
          this.props.onCheck(this.state.isChecked);
        }
      }
    );
  };
  render() {
    const { isChecked } = this.state;
    return (
      <label className="checkbox">
        <input onClick={this._onClick} value={isChecked} type="checkbox" />
        <span className={isChecked ? "checked" : ""} />
        {isChecked && <img src={checkSvg} alt="checked" />}
      </label>
    );
  }
}

ProTypes.defaultProps = {
  status: false
};

ProTypes.Checkbox = {
  status: ProTypes.bool
};

export default Checkbox;
