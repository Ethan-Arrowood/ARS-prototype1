import firebase, {firebaseRef} from 'app/firebase/';


export var startSignUp = (userEmail, userPassword) => {
  return (dispatch, getState) => {
    return firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword).then((result) => {
      const user = firebase.auth().currentUser;
      user.sendEmailVerification().then(() => {
        console.log('Verification email sent.');
        dispatch(signedup(true));
      }, () => {
        console.log('Verification email failed.');
        dispatch(signedup(false));
      });
      console.log('Auth worked!', result);
    }, (error) => {
      console.log('Unable to authenticate', error);
    });
  };
};
export var signedup = (veriSuccesful) => {
  return {
    type: 'SIGNEDUP',
    veriSuccesful
  }
}
export var login = (email) => {
  return {
    type: 'LOGIN',
    email
  };
};

export var startLogin = (userEmail, userPassword) => {
  return (dispatch, getState) => {
    return firebase.auth().signInWithEmailAndPassword(userEmail, userPassword).then((result) => {
      console.log('Auth worked!', result);
      dispatch(actions.login(email));
    }, (error) => {
      console.log('Unable to auth', error);
    });
  };
};

export var logout = () => {
  return {
    type: 'LOGOUT'
  };
};

export var startLogout = () => {
  return (dispatch, getState) => {
    return firebase.auth().signOut().then(() => {
      console.log('Logged out');
    });
  };
};
