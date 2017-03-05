/**
 * Created by TonyTong on 2017/3/3.
 */
import React from 'react';
import AddTodo from './../components/AddTodo'
import VisibilityList from './VisibilityList.js'
import Footer from './../components/Footer.js'
const App = ()=>(
    <div>
        <AddTodo />
        <VisibilityList />
        <Footer />
    </div>
);
export default App;
