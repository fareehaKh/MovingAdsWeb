import axios from 'axios';

const API_BASE = "http://localhost/MovingAdsBackend";

export const api = axios.create({
  baseURL: API_BASE
});