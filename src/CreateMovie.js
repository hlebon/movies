import React from "react";
import MultiCheckBox from "./MultiCheckBox";

class CreateMovie extends React.Component {
  state = {
    name: "",
    description: "",
    categories: []
  };

  _onChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  _onSubmit = e => {
    e.preventDefault();
    if (this.props.onSubmit) {
      this.props.onSubmit(this.state);
    }
  };
  render() {
    const { description, name } = this.state;
    return (
      <form onSubmit={this._onSubmit}>
        <label>Name</label>
        <input
          value={name}
          type="text"
          placeholder="movie name"
          name="name"
          onChange={this._onChange}
        />
        <label>Description</label>
        <textarea
          value={description}
          name="description"
          onChange={this._onChange}
        />
        <label>Categories</label>
        <MultiCheckBox
          onClick={categories =>
            this.setState({
              categories
            })
          }
        />
        <button type="submit">Enviar</button>
      </form>
    );
  }
}

export default CreateMovie;
