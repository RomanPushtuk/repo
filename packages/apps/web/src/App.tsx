import "./App.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "@repo/redux-module/thunks/fetchWeather";
import { BASE_URL } from "./configs";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const data = useSelector((store) => store);

  const onClick = () => {
    dispatch(fetchWeather());
  };

  const stringifyData = JSON.stringify(data, null, " ");

  return (
    <div className="App">
      <button onClick={onClick} type="button">
        Fetch weather
      </button>
      <p>BASE_URL = {BASE_URL}</p>
      <p>weatherData = {stringifyData}</p>
    </div>
  );
};

export default App;
