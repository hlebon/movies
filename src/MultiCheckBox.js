import React, { Component } from "react";
import PropTypes from "prop-types";

class MultiCheckBox extends Component {
  state = {
    values: []
  };

  _onClick = e => {
    e.stopPropagation();
    e.preventDefault();
    const { value } = e.target;
    this.handleValues(value);
  };

  handleValues = value => {
    const { values } = this.state;
    if (values.includes(value)) {
      this.setState(
        {
          values: values.filter(val => val !== value)
        },
        () => {
          if (this.props.onClick) {
            this.props.onClick(this.state.values);
          }
        }
      );
    } else {
      this.setState(
        {
          values: [...values, value]
        },
        () => {
          if (this.props.onClick) {
            this.props.onClick(this.state.values);
          }
        }
      );
    }
  };

  render() {
    const { values } = this.props;
    return (
      <ul className="multickebox">
        {values.map(value => {
          const included = this.state.values.includes(value);
          return (
            <li key={value}>
              <button
                onClick={this._onClick}
                value={value}
                style={{ backgroundColor: included ? "#99c6f3" : "" }}
              >
                {value}
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}

MultiCheckBox.defaultProps = {
  values: ["Terror", "Aventura"]
};

MultiCheckBox.propTypes = {
  values: PropTypes.array.isRequired
};

export default MultiCheckBox;
