import React from "react";
import Todo from "./Todo"

function TodoList({ setTodoList, todoList,filteredTodos }) {

  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>

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
