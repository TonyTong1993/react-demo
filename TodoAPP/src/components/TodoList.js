/**
 * Created by TonyTong on 2017/3/4.
 */
import React from 'react';
import Todo from './Todo.js'
const TodoList = ({todoArray,onTodoClick})=>{
    return (
      <ul className="style-TodoList">
          {todoArray.map(t =>{
              return <Todo key={t.id} { ...t } onClick={()=>onTodoClick(t.id)}></Todo>
          })}
      </ul>
    );
};
export default  TodoList;