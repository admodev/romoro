// Styles
import styles from './taskListComponent.module.css';

const TaskListComponent = (props) => {
  return(
    <div className={styles.taskListContainer}>
      {props.children}
    </div>
  )
}

export default TaskListComponent;
