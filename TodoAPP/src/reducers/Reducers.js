/**
 * Created by TonyTong on 2017/3/3.
 */
import {ADD_TODO,TOGGLE_TODO,SET_VISIBILITY_FILTER} from '../actions/Actions.js';
export const todoArray = (state,action)=>{
    if (state == undefined) {
        state = [];
    }
    switch (action.type){
        case ADD_TODO:
            return [
                ...state,{
                    text:action.text,
                    id:action.id,
                    completed:false
                }
            ];
        case TOGGLE_TODO:
            return state.map(todo => todo.id === action.id ? {...todo,completed:!todo.completed} : todo
            );
         default :
            return state
    }
};
export const visibilityFilter = (state ,action) =>{
        if (state==undefined){
          state = 'SHOW_ALL'
        }
       switch (action.type) {
         case SET_VISIBILITY_FILTER:
               return action.filter

         default :
               return state
       }
   };
