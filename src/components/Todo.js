import React from "react";

const Todo= ({todo,setTodoList,todoList}) =>{

     const deleteHandler = () => {
		setTodoList(todoList.filter((el)=> el.id !== todo.id));
	 }
     const completeHandler = () => {
	     setTodoList(todoList.map((item) => {
		     if(item.id === todo.id){
			     return{
				     ...item,completed : !item.completed
		             };
		     }
		     return item;
	     }));
     }
     return(
	 <div className="todo">
	     <li className={todo.completed?"completed":"todo-item" }>{todo.text}</li>
	     <button className="complete-btn" onClick={completeHandler}>
	     	<i className="fas fa-check"></i>
	     </button>
	     <button className="trash-btn" onClick={deleteHandler}>
	     	<i className="fas fa-trash"></i>
	     </button>
	  </div>
	  );
}

export default Todo;
