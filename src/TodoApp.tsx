import React from "react";
import internal from "stream";
import { isNamedTupleMember } from "typescript";
import TodoItem from "./components/TodoItem";

interface TodoAppProps {}
interface TodoAppState {
  todoItems: string[];
  newTodo: string;
}
interface CompleteIdx{
  index: number;
}

class TodoApp extends React.Component<TodoAppProps, TodoAppState> {
  constructor(props: TodoAppProps) {
    super(props);
    
    this.state = {
      todoItems: [],
      newTodo: "",
    };

  }

  handleNewTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      newTodo: e.target.value,
    });
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const items = this.state.todoItems.concat(this.state.newTodo)

    this.setState({
      todoItems: items,
      newTodo: "",
    })
  }

  handleComplete = (comIndex: CompleteIdx) =>{
    const copy = this.state.todoItems;
    copy.splice(comIndex.index, 1);
    this.setState({
      todoItems: copy
    })
  }
  
  render() {
    return (
      <div>
        <h3 id="title">TODO-LIST</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo" id="q">뭘 해야하나요?</label> <br />
          <input type="text" id="new-todo" value={this.state.newTodo} onChange={this.handleNewTodo} /> 
          <button id="button">Add #{this.state.todoItems.length + 1}</button>
        </form>
        {
          this.state.todoItems.map((item, idx) => (
            <div>
              <TodoItem name={item} key={idx}/>
              <input type="checkbox" onClick={()=>this.handleComplete({index:idx})}/>
            </div>
          ))
        }
        
      </div>
    )
  }
}

export default TodoApp;