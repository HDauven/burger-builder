import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://my-burger-react-project.firebaseio.com/'
});

export default instance;