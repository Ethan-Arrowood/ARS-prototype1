import React, { Component } from 'react';
import * as Redux from 'react-redux';
import * as actions from 'actions';

require('../styles/LogInSignUp.scss');

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({[name]: value});
  }
  handleSubmit(event) {
    e.preventDefault();

    const {dispatch} = this.props;
    const userEmail = this.state.email;
    const userPassword = this.state.password;

    dispatch(actions.startLogin(userEmail, userPassword));
  }
  render() {

    return (
      <form className="form-log-in animated" onSubmit={this.handleSubmit}>
        <input
          name="Email" placeholder="Email" type="text"
          value={this.state.email}
          onChange={this.handleChange}
        />
        <input
          name="Password" placeholder="Password" type="password"
          value={this.state.password}
          onChange={this.handleChange}
        />
      <input className="btn" type="submit" value="Log In"/>
      </form>
    )
  }
}

export default Redux.connect()(LogIn);
