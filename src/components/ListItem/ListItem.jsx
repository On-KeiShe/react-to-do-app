import '../ListItem/ListItem.css'

const ListItem = ({task}) =>{

  const handleDelete =()=>{

  }

  return (
    <>
    <li>
      <input type="checkbox"></input>
      <span className="task-text">{task}</span>
      <button onClick={handleDelete}>🗑</button>
    </li>
    </>
  )
}

export default ListItem