import "./App.css";
import React from "react";
import {
  useDispatch,
  useSelector,
  pending,
  RootState,
} from "@repo/redux-module";
import { BASE_URL } from "./configs";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const data = useSelector((store: RootState) => store.weather);

  const onClick = () => {
    dispatch(pending());
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
