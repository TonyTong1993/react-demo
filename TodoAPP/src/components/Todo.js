/**
 * Created by TonyTong on 2017/3/4.
 */
import React from 'react';
const Todo = ({completed,onClick,text})=>{
    let className = completed ? "selected-Todo": "normal-Todo"
    return (
        <li className = {className} onClick={onClick}>{text}</li>
    )
};
export default Todo;