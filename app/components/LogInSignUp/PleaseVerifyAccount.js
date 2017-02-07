import React, { Component } from 'react';
import $ from 'jquery';
import { Link } from 'react-router';


import bodymovin from 'bodymovin';

import data from './data.json';

require('../styles/LogInSignUp.scss');

class PleaseVerifyAccount extends Component {
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
  onClick() {
    this.setState({
      
    })
  }
  render() {
    return (
      <div className="container">
        <div id="fire" className="fire"></div>
        <div className="btn" onClick={this.onClick}>Log In</div>
      </div>
    );
  }
}

export default PleaseVerifyAccount;
