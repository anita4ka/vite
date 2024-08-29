import { useEffect, useRef, useState } from 'react'
import './App.css'
import Item from './item.tsx'

function App() {
  const initialTodos: string [] = [
    "wakeup",
    "homework",
    "eat",
    "sleep",
  ];

  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos") ?? JSON.stringify(initialTodos)) 
  );
  const addTodoHandler = (e) => setTodos([...todos, e.target.value]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  const inputRef = useRef<any>(null);

  return (
  
      <div>
     {todos.map((item: any, index: any) => {
        return <Item key={index} item={item} />
      })};

       <form>
        <input onChange={(e) => (inputRef.current as unknown as string) = e.target.value} type='text' placeholder='Ввести задачу'/>
        <button onClick={addTodoHandler} type='submit'>
          Добавить
        </button>
      </form>
      {todos.length >= 4 && <div>Всего задач: {todos.length}</div>}
      </div>

  )
}

export default App
