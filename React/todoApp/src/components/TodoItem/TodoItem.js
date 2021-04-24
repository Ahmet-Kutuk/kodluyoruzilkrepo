import React from "react";
import "./TodoItem.css";
import { useState } from "react";

function Todo(props) {
  const [completed,setCompleted] = useState(false);
  function complete(){
    const handler = document.querySelectorAll(".todoItem");
    handler.forEach(item => {
      item.addEventListener("click",function(e) {
        setCompleted(true);
        if(completed)
        {
          e.target.style.textDecoration="line-through";
          setCompleted(false);
        }
        else {
         e.target.style.textDecoration="none";
        }
      })
    })
  
  };
  const { content } = props;
  const { id } = props;
  return <div className="todoItem"  onClick={complete} >{content}
  <button  onClick={() => props.delete(id)} style={{backgroundColor:"red",border:"none",color:"white",float:"right",width:"3rem"}} type="button">X</button>
  </div>;
}

export default Todo;
