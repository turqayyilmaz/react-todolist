import React from "react";

export default function TodoListFooter({
  todoList,
  setFilterStatus,
  filterStatus,
  setTodoList
}) {

  const clearCompleted=()=>{
    setTodoList(
      todoList.filter((item)=>{
        return !item.isDone;
      }) )
  }

  const clickFilter = (e) => {
    setFilterStatus(e.target.text);
    
  };
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>
          {todoList.filter((item) => item.isDone === false).length}{" "}
        </strong>
        items left
      </span>

      <ul className="filters">
        <li>
          <a
            className={`${filterStatus==="All" ? "selected" : ""}`}
            onClick={clickFilter}
          >All</a>
        </li>
        <li>
          <a
            className={filterStatus == "Active" ? "selected" : ""}
            onClick={clickFilter}
          >Active</a>
        </li>
        <li>
          <a
            className={filterStatus == "Completed" ? "selected" : ""}
            onClick={clickFilter}
          >Completed</a>
        </li>
      </ul>

      <button className="clear-completed" onClick={clearCompleted}>Clear completed</button>
    </footer>
  );
}
