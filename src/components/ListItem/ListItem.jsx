import "../ListItem/ListItem.css";

const ListItem = ({ task }) => {
  return (
    <li>
      <input type="checkbox" checked={task.completed} readOnly />
      <span className="task-text">{task.text}</span>
      <button className="delete-button">🗑</button>
    </li>
  );
};

export default ListItem;