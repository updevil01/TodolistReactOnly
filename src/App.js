
import { useState } from 'react';
import './App.css';

function App() {
//สร้างarrayเก็บtodo
//สร้างเก็บInput
const [Todos,SetTodos] = useState([]);
const [InputValue,SetInputValue] = useState('');


const [EditInputValue,SetEditInputValue] = useState('');
const [IsEditing,SetEditing] = useState(false);
const [editIndex,SetEditIndex] = useState(-1);

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

const Edit =(index)=>{
  SetEditIndex(index)
  SetEditing(true)
  SetEditInputValue(Todos[index])
}

const ConfirmEdit=()=>{
  const updated = Todos.map((result,index)=>{
    return index === editIndex ? EditInputValue : result
  });
SetTodos(updated);
    SetEditInputValue(''); // รีเซ็ต EditInputValue
    SetEditing(false);
    SetEditIndex(-1); // รีเซ็ต index ที่แก้ไขเป็น -1
}
  return (
    <div className="App">
      <h1>To-do List</h1>
      <input
      type='text'
      value={InputValue}
      onChange={(e)=>SetInputValue(e.target.value)}
      />
       <button onClick={Addtodos}>
       ADD
       </button>
      <ui>
      {Todos.map((result, index) => (
    <li className="todoItem" key={index}>
    {IsEditing && editIndex === index ?(
         <input
         type='text'
         value={EditInputValue}
         onChange={(e)=>SetEditInputValue(e.target.value)}
        />
    ):(
      <span className="todoText">{result}</span> 
    )}
      { IsEditing && editIndex === index ? (
            <button onClick={()=>ConfirmEdit(index)}> Con</button>
      ):(
        <button onClick={()=>Edit(index)}> Edit</button>
      )}
        <button className="removeButton" onClick={() => DeleteTodos(index)}>Remove</button>
    
  </li>
))}
      </ui>
    </div>
  );
}

export default App;
