import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/tasks")
      .then((response) => response.json())
      .then((data) => {
        setTasks(data.tasks);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Header />
      <List tasks={tasks} setTasks={setTasks} />
    </>
  );
}

export default App;