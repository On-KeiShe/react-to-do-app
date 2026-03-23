import { useState } from "react"
import Header from './components/Header/Header'
import List from './components/List/List'
import './App.css'

function App() {
    const [tasks,setTasks] = useState([])
  return(
    <>
<Header setTasks={setTasks}/>
<List tasks={tasks} setTasks={setTasks}/>
    </>
  )
}

export default App
