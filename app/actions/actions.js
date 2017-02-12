import firebase, {firebaseRef} from 'app/firebase/';

export const signUp = (email, password) => {
  return (dispatch, getState) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password).then((result) => {
      const user = firebase.auth().currentUser;

      user.sendEmailVerification().then(() => {
        console.log('Verification email sent.');
      }, () => {
        console.log('Verification email failed.');
      });
      console.log('Auth worked!', result);
    }, (error) => {
      console.log('Unable to authenticate', error);
    });
  }
}

export var login = (uid) => {
  return {
    type: 'LOGIN',
    uid
  };
};

export var startLogin = (userEmail, userPassword) => {
  return (dispatch, getState) => {
    return firebase.auth().signInWithEmailAndPassword(userEmail, userPassword).then((result) => {
      
      console.log('Auth worked!', result);
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
