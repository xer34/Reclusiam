import React, { Component } from "react";

export default class SignUp extends Component {
  state = {
    email: "",
    password: "",
    firstName: '',
    lastName: ''
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault()
  };

  render() {
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Sign Up</h5>

          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <label htmlFor="firstName">Fist Name</label>
            <input type="text" id="firstName" onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <label htmlFor="lastName">Last Initial</label>
            <input type="text" id="lastName" onChange={this.handleChange} />
          </div>

            

          <div className="input-field">
            <button className="btn pink ligten-1 z-depth-0">Login</button>
          </div>
        </form>
      </div>
    );
  }
}
