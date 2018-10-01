import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from "../TextField";

const initialState = { name: '', email: '', lang: '', message: '', terms: false };

class Form extends Component {
  static defaultProps = {
  	onSubmit: () => {},
  };

  static propTypes = {
  	onSubmit: PropTypes.func,
  };

  state = initialState;

  handleChange = (event) => {
  	const { target: { type, checked, value, name } } = event;

  	const newValue = type === "checkbox" ? checked : value;

  	this.setState({ [name]: newValue });
  };

  handleSubmit = (event) => {
  	event.preventDefault();

  	this.props.onSubmit(this.state);
  };

  handleReset = () => this.setState(initialState);

  render() {
  	return (
  		<form onSubmit={this.handleSubmit}>
  			<TextField
  				name="name"
  				label="Name"
  				onChange={this.handleChange}
  				value={this.state.name}
  			/>

  			<TextField
  				name="email"
  				label="Email"
  				onChange={this.handleChange}
  				value={this.state.email}
  			/>

  			<div>
  				<label htmlFor="message">Message:</label>
  				<textarea
  					id="message"
  					name="message"
  					value={this.state.message}
  					onChange={this.handleChange}
  				/>
  			</div>
  			<div>
  				<label htmlFor="lang">Favourite language:</label>
  				<select id="lang" name="lang" value={this.state.lang} onChange={this.handleChange}>
  					<option value="" />
  					<option value="js">JavaScript</option>
  					<option value="cljs">Java</option>
  				</select>
  			</div>
  			<div>
  				<label>
  					<input
  						type="checkbox"
  						name="terms"
  						checked={this.state.terms}
  						onChange={this.handleChange}
  					/>
            Do you agree with our terms of conditions?
  				</label>
  			</div>
  			<button type="submit">Submit</button>
  			<button type="button" onClick={this.handleReset}>
          Reset
  			</button>
  		</form>
  	);
  }
}
export default Form;
