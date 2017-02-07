import React, { Component } from 'react';

class InfoContainer extends Component {
  render() {
    return (
      <div className="info-container">
        <div className="info-item log-in">
          <p>{`Have an account?`}</p>
          <div className="btn">{`Log In`}</div>
        </div>
        <div className="tree">
          <div className="leaves"></div>
          <div className="trunk"></div>
        </div>
        <div className="info-item sign-up">
          <p>{`Don't have an account?`}</p>
          <div className="btn">{`Sign Up`}</div>
        </div>
      </div>
    );
  }
};

export default InfoContainer;
