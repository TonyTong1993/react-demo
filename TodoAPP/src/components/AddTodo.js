/**
 * Created by TonyTong on 2017/3/3.
 */
import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/Actions.js'
let AddTodo = ({dispatch})=>{
    let input;
    return (
        <div>
            <form onSubmit={e=>{
                e.preventDefault();
                if (!input.value.trim()) {
                return
                }
              dispatch(addTodo(input.value));
                input.value = ''
            }}>
                <input type="text" ref={ node => input = node}/>
                <button>AddTodo</button>
            </form>
        </div>
    )
};
AddTodo = connect()(AddTodo);
export default AddTodo;