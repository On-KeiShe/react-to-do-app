import '../List/List.css';
import ListItem from "../ListItem/ListItem";
import Adder from "../Adder/Adder";

const List = ({ tasks, setTasks }) => {
  const handleDelete = (indexToDelete) => {
    const newTasks = tasks.filter((task, index) => index !== indexToDelete);
    setTasks(newTasks);
  };

  return (
    <>
      <Adder tasks={tasks} setTasks={setTasks} />
      {tasks.length === 0 ? (
        <p>Nothing to see here yet .. Add in the field above! 👆</p>
      ) : (
        <ul>
          {tasks.map((task, index) => {
            return (
              <ListItem
                task={task}
                key={index}
                handleDelete={() => handleDelete(index)}
              />
            );
          })}
        </ul>
      )}
    </>
  );
};

export default List;