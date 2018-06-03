import React from 'react';
import { Provider } from 'react-redux';
import Todo from './src/Todo';
// import Fancy from './src/fancy';
import { store } from './src/store';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Todo />
      </Provider>
    );
  }
}

