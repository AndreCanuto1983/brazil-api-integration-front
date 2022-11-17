import axios from 'axios';
//import Authorization from './Auth';

//const authorization = new Authorization();

const http = axios.create({
  baseURL: window.location.host.includes('localhost') ? 'https://localhost:44328' : 'pospucback.ddns.net:5000',
  headers: {
    'Accept': '*/*',     
    'Content-Type': 'application/json'    
    //'Authorization': authorization.auth() !== null ? `Bearer ${authorization.auth()}` : ''
  }   
});

export default http;