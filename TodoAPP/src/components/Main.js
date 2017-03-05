require('normalize.css/normalize.css');
require('styles/App.css');
import React from 'react';
import { createStore,combineReducers } from 'redux';
import { Provider } from 'react-redux';
import App from '../container/app.js'
import { todoArray,visibilityFilter } from '../reducers/Reducers.js'
let reducer = combineReducers({todoArray,visibilityFilter});
let store = createStore(reducer);
class AppComponent extends React.Component {
  render() {
    return (
        <Provider store={store}>
          <App />
        </Provider>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
