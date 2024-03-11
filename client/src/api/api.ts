import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    ' Access-Control-Allow-Origin': '*',
  },
});

const getData = async (endpoint: string) => {
  try {
    const response = await api({
      method: 'get',
      url: endpoint,
    });
    return response.data;
  } catch (e) {
    console.error(e);
    return null;
  }
};

const postData = async (endpoint: string, data: any) => {
  try {
    const response = await api({
      method: 'post',
      url: endpoint,
      data,
    });
    return response.data;
  } catch (e) {
    console.error(e);
    return null;
  }
};

const API = {
  getData,
  postData,
};

export default API;
