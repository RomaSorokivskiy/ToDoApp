import { useState } from "react"

import Header from './header'
import Main from './main/main'
import Footer from './footer'
import ModalWindow from './ModalWindow'



const App = () => {
  const [todos, setTodos] = useState([])

  const addToDo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return
    }

    const newTodos = [todo, ...todos]

    setTodos(newTodos)
  }

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return
    }
    setTodos(prev => prev.map(item => item.id === todoId ? newValue : item))
  }

  const removeToDo = (id) => {
    const removeArr = [...todos].filter(todo => todo.id !== id)

    setTodos(removeArr)
  }

  return (
    <div className="flex h-[550px] flex-col justify-center items-center">
      <Header />
      <Main todos={todos} func={removeToDo} funcU={updateTodo} />
      <Footer />
      <ModalWindow onSubmit={addToDo} edit={false} />
    </div>
  )
}

export default App
