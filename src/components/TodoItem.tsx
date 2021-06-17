import React from "react";
import { Style } from "../UI/Style";

interface clickedProps{}
interface TodoItemProps {
  name: string;
}

function TodoItem(props: TodoItemProps) {
  return(
    <Style>
      <span id="obj">
        {props.name}
      </span>
    </Style>
  )
}

export default TodoItem;