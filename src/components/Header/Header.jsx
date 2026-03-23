import '../Header/Header.css'

const Header = ({ setTasks }) => {
const handleReset = ()=> {
setTasks([])
}

  return (
    <div className="header">
    <h1>My Todos</h1>
    <button className="reset-button" onClick={handleReset}>Reset</button>
    </div>
  )
}

export default Header