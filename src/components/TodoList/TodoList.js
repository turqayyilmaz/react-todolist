import React from "react";
import Todo from "./Todo"


function TodoList({ setTodoList, todoList,filteredTodos,check,setCheck }) {

const checkChange =()=>{
    
    setCheck(!check);
    setTodoList(todoList.map((item)=>{return {...item,isDone:check}}))
}

  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" name="checkAll" onChange={checkChange} checked={check} />
      <label htmlFor="toggle-all" onClick={checkChange}>Mark all as complete</label>

      <ul className="todo-list">
        {filteredTodos.map((item) => {
          return (
            <Todo todo={item} setTodoList={setTodoList} todoList={todoList} filteredTodos={filteredTodos} key={item.todoId}/>
          );
        })}
      </ul>
    </section>
  );
}

export default TodoList;
