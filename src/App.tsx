import { useEffect, useRef, useState } from 'react'
import './App.css'
import Item from './item.tsx'
import { Task } from './types.ts';

function App() {
  const initialTodos: Task[] = [
   {id: "0", title: "wakeup",},
  {id: "1", title: "homework",},
   {id: "2", title: "eat",},
   {id: "3", title: "sleep",},
  ];

  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos") ?? JSON.stringify(initialTodos)) 
  );
  const addTodoHandler = (e) => {
   
    setTodos([...todos, inputRef.current.value])
  
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  const inputRef = useRef<any>(null);
  const deleteTodoHandler = (id: string) => {
    
    const remainingTodo = todos.filter((item: Task) => item.id !== id);
    setTodos(remainingTodo);
  };
  return (
  
      <div>
     {todos.map((item: Task) => {
        return <Item key={item.id} item={item} deleteTodo={deleteTodoHandler}/>
      })}

       <form>
        <input ref={inputRef} type='text' placeholder='Ввести задачу'/>
        <button onClick={addTodoHandler} type='submit'>
          Добавить
        </button>
      </form>
      {todos.length >= 4 && <div>Всего задач: {todos.length}</div>}
      </div>

  )
}

export default App
