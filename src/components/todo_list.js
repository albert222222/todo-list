import React from 'react';
import Todo from './Todo';

const TodoList= ({todoList, setTodoList, filteredTodo})=>{
  
  return(
    <div className="todo-container">
    <ul className="todo-list">
      {filteredTodo.map((todo)=>(
	      <Todo 
	      todo={todo} 
	      setTodoList={setTodoList}
	      todoList={todoList} 
        />
      ))}
    </ul>
    </div>
  
  );
}

export default TodoList;
