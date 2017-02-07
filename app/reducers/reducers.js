const initialAuthState = {
  uid: '',
  username: '',
  useremail: '',
  isVerified: undefined,
}

export const authReducer = (state = initialAuthState, action) => {
  switch(action.type) {
    case 'LOGIN':
      return {
        email: action.email
      }
    case 'LOGOUT':
      return {}
    case 'SIGNEDUP':
      return {
        signedup: action.veriSuccesful
      }
    default:
      return state;
  }
};
