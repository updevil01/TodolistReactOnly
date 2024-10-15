
import { useState } from 'react';
import './App.css';

function App() {
//สร้างarrayเก็บtodo
//สร้างเก็บInput
const [Todos,SetTodos] = useState([]);
const [InputValue,SetInputValue] = useState('');

const Addtodos =()=>{
  if(InputValue.trim() !== ''){
    SetTodos([...Todos,InputValue.trim()]);
    SetInputValue('');
  }
}

const DeleteTodos = (index)=>{
  const deleteTodos = Todos.filter((_i,i) =>i !== index)
  SetTodos(deleteTodos);
}

  return (
    <div className="App">
      <h1>To-do List</h1>
      <input
      type='text'
      value={InputValue}
      onChange={(e)=>SetInputValue(e.target.value)}
      />
      <button onClick={Addtodos}>Add</button>
      <ui>
      {Todos.map((result, index) => (
  <li className="todoItem" key={index}>
    <span className="todoText">{result}</span> {/* ข้อความ todo */}
    <button className="removeButton" onClick={() => DeleteTodos(index)}>Remove</button>
  </li>
))}
      </ui>
    </div>
  );
}

export default App;
