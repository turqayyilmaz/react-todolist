import React from "react";

export default function Todo({ todo, setTodoList,todoList }) {

    const deleteTodo=()=>{
        setTodoList(todoList.filter((item)=>{
            return item.todoId!==todo.todoId
        }));

    }
  const changeTodo = () => {

    setTodoList(todoList.map((item)=>{
        if(item.todoId===todo.todoId)
        return {...item,isDone:!item.isDone};

        return item;
    }))
    

    
    
  };

  return (
    <li className={todo.isDone===true ? 'completed':''} >
      <div className="view">
        <input className="toggle" type="checkbox" onChange={changeTodo} checked={todo.isDone} />
        <label>{todo.todo}</label>
        <button className="destroy" onClick={deleteTodo}></button>
      </div>
    </li>
  );
}

