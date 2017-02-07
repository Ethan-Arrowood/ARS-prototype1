import React, { Component } from 'react';
import $ from 'jquery';

import bodymovin from 'bodymovin';

import data from './data.json';

import LogIn from './LogIn.js';
import SignUp from './SignUp.js';

require('../styles/LogInSignUp.scss');

class LogInSignUpContainer extends Component {
  componentDidMount() {
    
    bodymovin.loadAnimation({
      container: document.getElementById('fire'),
      animType: 'svg',
      loop: true,
      autoplay: true,
      animationData: data
    })

    let currentlyVisible = ".form-log-in";
    let currentlyHidden = ".form-sign-up";
    $(".info-item .btn").click(function(){
      $(".form-container").toggleClass("active");
      $(currentlyVisible).fadeToggle('750', function() {
        $(currentlyHidden).fadeToggle();
        let s = currentlyVisible;
        currentlyVisible = currentlyHidden;
        currentlyHidden = s;
      });
      $(".leaves").addClass("animated tada").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $(this).removeClass("animated tada");
      });
    });
  }
  render() {
    return (
      <div className="container">
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

        <div className="form-container">
          <h2>{`Camp Arrowood`}</h2>
          <div id="fire" className="fire"></div>
          <div className="form-item">
            <LogIn/>
            <SignUp/>
          </div>
        </div>
      </div>
    );
  }
}

export default LogInSignUpContainer;
