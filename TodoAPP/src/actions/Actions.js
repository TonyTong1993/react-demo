/**
 * Created by TonyTong on 2017/3/3.
 */
export const ADD_TODO= 'ADD_TODO';
export const TOGGLE_TODO= 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
let nextTodoID=0;
export const addTodo = (text)=>{
    return {
        type:ADD_TODO,
        id:nextTodoID++,
        text
    }
};
export const toggleTodo = (id)=>{
    return {
        type:TOGGLE_TODO,
        id
    }
};
export const setVisibility = (filter) => {
  return {
    type:SET_VISIBILITY_FILTER,
    filter
  }
};