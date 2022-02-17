import React from "react";
import Footer from "./components/Footer/index";
import Header from "./components/Header/index";
import { TodoList, TodoListFooter } from "./components/TodoList";
import { useState, useEffect } from "react";

import "./App.css";
export default function App() {
  const initialValue = [
    { todo: "Learn JavaScript", isDone: false, todoId: 1 },
    { todo: "Learn React", isDone: true, todoId: 2 },
    { todo: "Have a life!", isDone: false, todoId: 3 },
  ];
  const [todoList, setTodoList] = useState(initialValue);
  const [addText, setAddText] = useState("");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [filterStatus, setFilterStatus] = useState("All");
  const [check,setCheck]=useState(false);


  //UseEffect
  useEffect(() => {
    filter();
  }, [todoList, filterStatus]);



  const filter = () => {
    switch (filterStatus) {
      case "Completed":
        setFilteredTodos(todoList.filter((todo) => todo.isDone === true));
        break;

      case "Active":
        setFilteredTodos(todoList.filter((todo) => todo.isDone === false));
        break;

      default:
        setFilteredTodos(todoList);
        break;
    }
  };
  return (
    <div>
      <section className="todoapp">
        <Header
          setTodoList={setTodoList}
          todoList={todoList}
          setAddText={setAddText}
          addText={addText}
        />
        <TodoList
          setTodoList={setTodoList}
          todoList={todoList}
          filteredTodos={filteredTodos}
          check={check}
          setCheck={setCheck}
        />
        <TodoListFooter
          setTodoList={setTodoList}
          todoList={todoList}
          filteredTodos={filteredTodos}
          setFilterStatus={setFilterStatus}
          filterStatus={filterStatus}
        />
      </section>

      <Footer />
    </div>
  );
}
