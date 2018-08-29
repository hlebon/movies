import React, { Component } from "react";
import PropTypes from "prop-types";

class MultiCheckBox extends Component {
  state = {
    values: this.props.activeValues
  };

  _onClick = e => {
    e.stopPropagation();
    e.preventDefault();
    const { value } = e.target;
    this.handleValues(value);
  };

  handleValues = value => {
    if (this.props.multi) {
      this.handleMultiValues(value);
    } else {
      this.handleSingleValue(value);
    }
  };

  handleSingleValue = value => {
    const { values } = this.state;
    if (!values.includes(value)) {
      this.setState(
        {
          values: value
        },
        () => {
          if (this.props.onClick) {
            this.props.onClick(this.state.values);
          }
        }
      );
    }
  };

  handleMultiValues = value => {
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

  activeBtnStyle = clicked => {
    let style = {};
    if (clicked && this.props.multi) {
      style = { backgroundColor: "#99c6f3" };
    } else if (clicked && !this.props.multi) {
      style = { borderColor: "#8bc34a", outline: "none" };
    }
    return style;
  };

  render() {
    const { values, className } = this.props;

    return (
      <ul className="inline">
        {values.map(value => {
          const included = this.state.values.includes(value);
          return (
            <li key={value}>
              <button
                onClick={this._onClick}
                value={value}
                className={className}
                style={this.activeBtnStyle(included)}
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
  values: [],
  className: "checkBtn",
  multi: false,
  activeValues: []
};

MultiCheckBox.propTypes = {
  values: PropTypes.array.isRequired,
  className: PropTypes.string,
  multi: PropTypes.bool,
  activeValues: PropTypes.array
};

export default MultiCheckBox;
