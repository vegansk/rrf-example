import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { combineForms } from 'react-redux-form';

import UserForm from './UserForm';

let root = document.getElementById('root');

let store = createStore(
  combineForms({
    testForm: {}
  })
);

let App = () => (
  <Provider store={store}>
    <UserForm/>
  </Provider>
);

ReactDOM.render(<App/>, root);
