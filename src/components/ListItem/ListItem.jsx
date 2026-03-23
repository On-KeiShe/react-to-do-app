import '../ListItem/ListItem.css';

const ListItem = ({ task, handleDelete }) => {
  return (
    <li>
      <input type="checkbox" />
      <span className="task-text">{task}</span>
      <button className="delete-button" onClick={handleDelete}>🗑</button>
    </li>
  );
};

export default ListItem;