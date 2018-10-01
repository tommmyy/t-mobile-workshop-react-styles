import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  static defaultProps = {
  	onSubmit: () => {},
  };

  static propTypes = {
  	onSubmit: PropTypes.func,
  };

  state = { name: '' };

  handleChangeName = (event) => {
  	this.setState({ name: event.target.value });
  };

  handleSubmit = (event) => {
  	event.preventDefault();

  	this.props.onSubmit(this.state);
  };

  render() {
  	return (
  		<form onSubmit={this.handleSubmit}>
  			<label htmlFor="name">Name:</label>
  			<input
  				type="text"
  				id="name"
  				value={this.state.name}
  				onChange={this.handleChangeName}
  			/>

  			<button type="submit">Submit</button>
  		</form>
  	);
  }
}
export default Form;
