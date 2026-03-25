import "../Adder/Adder.css";
import { useState } from "react";

const Adder = ({ tasks, setTasks }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (input.trim() === ""){
      alert("Please enter a task");
    }

    const updatedTasks = [...tasks, `${tasks.length + 1}. ${input}`];
    setTasks(updatedTasks);
    setInput("");
  };

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="input-and-button">
          <input
            className="input-textbox"
            type="text"
            onChange={handleChange}
            value={input}
            placeholder="Add your task here..."
          />
          <button className="add-button" type="submit">
            +
          </button>
        </div>
      </form>
    </>
  );
};

export default Adder;
