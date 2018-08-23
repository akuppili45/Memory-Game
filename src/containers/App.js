import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "../store";
import { BrowserRouter as Router } from "react-router-dom";
import GamePage from "./GamePage";
const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Router>
       <GamePage />
    </Router>
  </Provider>
);
export default App;
