/**
 * Created by TonyTong on 2017/3/7.
 */
import React from 'react';
import { createStore,combineReducers } from 'redux';
import { Provider } from 'react-redux';
import App from './app.js'
import { todoArray,visibilityFilter } from '../reducers/Reducers.js'
let reducer = combineReducers({todoArray,visibilityFilter});
let store = createStore(reducer);
class TodoApp extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}

TodoApp.defaultProps = {
};

export default TodoApp;
