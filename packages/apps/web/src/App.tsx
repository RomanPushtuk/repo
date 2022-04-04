import './App.css';
import React, { useEffect } from 'react';
import { createApi } from '@repo/api-module';
import logo from './logo.svg';

const BASE_URL = String(process.env.REACT_APP_BASE_URL);
const API_KEY = String(process.env.REACT_APP_API_KEY);

console.log(BASE_URL, API_KEY);

const DEFAULT_SEARCH_PARAMS = {
  lat: '55.75396',
  lon: '37.620393',
  lang: 'en_US',
};
const REQUEST_HEADERS = {
  'X-Yandex-API-Key': API_KEY,
};

const apiInstance = createApi({
  baseURL: BASE_URL,
  timeout: 1000,
  headers: REQUEST_HEADERS,
  params: DEFAULT_SEARCH_PARAMS,
});

const App: React.FC = () => {
  useEffect(() => {
    apiInstance.get('')
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
