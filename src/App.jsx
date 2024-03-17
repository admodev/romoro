// Components
import { Lumiflex } from "uvcanvas";
import FlipMove from "react-flip-move";
import TaskComponent from "./Components/TaskComponent";
import TaskListComponent from "./Components/TaskListComponent";

let tasksArray = [
  { id: 1, taskTitle: "Una tarea", taskStatus: true },
  { id: 2, taskTitle: "Otra tarea", taskStatus: true },
  { id: 3, taskTitle: "Una tarea mas", taskStatus: false },
  { id: 4, taskTitle: "Otra tarea!", taskStatus: false },
];

const App = () => {
  return (
    <div>
      <Lumiflex />
      <TaskListComponent>
        <FlipMove>
          {tasksArray.map((task, key) => (
            <TaskComponent
              key={task.id}
              taskTitle={task.taskTitle}
              taskStatus={task.taskStatus}
            />
          ))}
        </FlipMove>
      </TaskListComponent>
    </div>
  );
};

export default App;
