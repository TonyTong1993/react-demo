/**
 * Created by TonyTong on 2017/3/4.
 */
import { connect } from 'react-redux';
import { toggleTodo } from '../actions/Actions.js'
import TodoList from '../components/TodoList.js'
let getStateTodoArray = (todoArray,filter) =>{
    switch (filter) {
        case 'SHOW_ALL':
            return todoArray;
        case 'SHOW_COMPLETED':
            return todoArray.filter(t =>t.completed);
        case 'SHOW_ACTIVE':
            return todoArray.filter(t =>!t.completed);
    }
};
const mapStateToProps = (state)=>{
    return {
      todoArray:getStateTodoArray(state.todoArray,state.visibilityFilter)
    }
};
const mapDispatchToProps = (dispatch)=>{
    return {
        onTodoClick:(id)=>{
            dispatch(toggleTodo(id))
        }
    }
};
let VisibilityList = connect(mapStateToProps,mapDispatchToProps)(TodoList);
export default VisibilityList;