import { useState } from "react"

const Adder = ({tasks, setTasks}) =>{

  const [input,setInput] = useState("")

const handleSubmit = (event) => {
event.preventDefault();
const updatedTasks =[...tasks, `${tasks.length+1}. ${input}`];
setTasks(updatedTasks);
setInput('');
}

const handleChange = (event) => {
  setInput(event.target.value)
}

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} value={input} placeholder="Add your task here..."/>
      <button type="submit">+</button>
    </form>
    </>
  )
}

export default Adder