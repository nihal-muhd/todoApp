import './App.css'
import { useState } from 'react'

function App() {
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState('')

  const handleDelete = (obj) => {
    const newList = todos.filter((element) => element.id !== obj.id)
    setTodos(newList)
  }

  const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const d = new Date();
  let day = weekday[d.getDay()];

  return (
    <div className="App">
      <div className="app">
        <div className="mainHeading">
          <h1>ToDo List</h1>
        </div>
        <div className="subHeading">
          <br />
          <h2>Hola amigo, it's  {day} 🌝 ☕ </h2>
        </div>
        <div className="input">
          <input value={todo} onChange={(e) => setTodo(e.target.value)} type="text" placeholder="🖊️ Add todays task..." />
          <i onClick={() => setTodos([...todos, { id: Date.now(), text: todo, status: false }], setTodo(''))} className="fas fa-plus"></i>
        </div>
        <div className="todos">
          {todos.map((obj) => {
            return (
              <div className="todo">
                <div className="left">
                  <input onChange={(e) => {
                    todos.filter((obj2) => {
                      if (obj2.id === obj.id) {
                        obj.status = e.target.checked
                        console.log(obj.status)
                        if(obj.status ===true){
                          alert("Great completed your task")
                        }
                      }
                      return obj2
                    })
                  }} value={obj.status} type="checkbox" name="" id="" />
                  <p>{obj.text}</p>
                </div>
                <div className="right">
                  <i className="fas fa-times" onClick={() => {
                    handleDelete(obj)
                  }}></i>
                </div>
              </div>
            )
          })
          }

        </div>
      </div>
    </div>
  );
}

export default App;
