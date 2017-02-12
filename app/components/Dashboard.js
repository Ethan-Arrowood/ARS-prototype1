import React, { Component } from 'react';
import * as Redux from 'react-redux';
import * as actions from 'actions';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    console.log('Logging out. . .');
    const { dispatch } = this.props;
    dispatch(actions.startLogout());
  }
  render() {
    return (
      <div>
        <p>Dashboard</p>
        <button onClick={this.handleClick}>Log Out</button>
      </div>
    )
  }
}

export default Redux.connect()(Dashboard);
