import "../List/List.css";
import ListItem from "../ListItem/ListItem";
import Adder from "../Adder/Adder";

const List = ({ tasks, setTasks }) => {
  return (
    <>
      <Adder tasks={tasks} setTasks={setTasks} />

      {tasks.length === 0 ? (
        <p>Nothing to see here yet .. Add in the field above! 👆</p>
      ) : (
        <ul>
          {tasks.map((task) => {
            return <ListItem task={task} key={task.id} />;
          })}
        </ul>
      )}
    </>
  );
};

export default List;