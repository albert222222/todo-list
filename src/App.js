import React, {useState, useEffect} from 'react';
import "./App.css";
import Form from "./components/Form.js";
import TodoList from "./components/todo_list.js";

function App(){

  const[inputText,setInputText] = useState("");
  const[todoList,setTodoList] = useState([]);
  const[status,setStatus] = useState("all");
  const[filteredTodo, setFilteredTodo] = useState([]);

  useEffect(()=>FilterHandler(),[todoList, status])

  const FilterHandler = () => { 
   switch(status){
     case "completed":
      setFilteredTodo(todoList.filter(todo => todo.completed === true));
      break;
     case "uncompleted":
      setFilteredTodo(todoList.filter(todo => todo.completed === false));
      break;
     default:
      setFilteredTodo(todoList);
      break;
    }
  }
  return(
       <div className='App'>
         <header><h1>Works to do today</h1></header> 
         <Form 
	        setInputText={setInputText} 
	        setTodoList={setTodoList} 
	        todoList={todoList}
	        inputText={inputText}
          setStatus={setStatus}
          /> 
         <TodoList 
         todoList={todoList} 
         setTodoList={setTodoList}
         filteredTodo={filteredTodo}
         />
       </div>
   );
}
export default App;
