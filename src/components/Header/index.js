import React from "react";

function index({setTodoList,addText,setAddText,todoList}) {
const changeText=(e)=>{
  setAddText(e.target.value);
}

const addTodo=(e)=>{
  e.preventDefault();
  
  if(addText!=="")
  setTodoList([...todoList,{isDone:false,todo:addText,todoId:Math.random()*1000}]);
  setAddText("");

}
  return (
    <div>
      <header className="header">
        <h1>todos</h1>
        <form onSubmit={addTodo}>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            autoFocus
            value={addText}
            onChange={changeText}
          />
        </form>
      </header>
    </div>
  );
}

export default index;
