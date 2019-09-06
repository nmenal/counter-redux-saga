import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import Counter from "./Counter";
import counter from "./reducers";
import rootSagas from "./sagas";

const sagaMidlleware = createSagaMiddleware();
const store = createStore(counter, applyMiddleware(sagaMidlleware));

const App = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};
sagaMidlleware.run(rootSagas);

ReactDOM.render(<App />, document.getElementById("root"));