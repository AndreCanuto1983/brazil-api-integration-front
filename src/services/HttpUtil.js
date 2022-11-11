import axios from 'axios';
//import Authorization from './Auth';

//const authorization = new Authorization();

const http = axios.create({
  baseURL: window.location.host.includes('localhost') ? 'http://localhost:49168' : 'pospucback.ddns.net',
  headers: {
    'Accept': '*/*',     
    'Content-Type': 'application/json'
    //'Authorization': authorization.auth() !== null ? `Bearer ${authorization.auth()}` : ''
  }   
});

export default http;