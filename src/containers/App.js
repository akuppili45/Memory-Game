import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "../store";
import { BrowserRouter as Router } from "react-router-dom";
import Game from '../components/Game';
import { connect } from 'react-redux';
const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Router>
       {/* <Game cards={cards}/> */}
    </Router>
  </Provider>
);
// const mapStateToProps = state => ({cards: state.cards});
export default App;
