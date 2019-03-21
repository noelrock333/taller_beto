import axios from 'axios';

class Auth {
  static login(user, password) {
    console.log('Hola', user, password);
    // return axios.post('http://login.com', { user, password });
  }
}

export default Auth;