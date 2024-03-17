// Styles
import { forwardRef } from "react";
import styles from "./taskComponent.module.css";

/**
 * @param {taskStatus} props
 * @returns boolean
 * If the taskStatus property is set to true, then the checkbox will be checked.
 */
const TaskComponent = forwardRef((props, ref) => (
  <div ref={ref} className={styles.taskContainer}>
    <input
      type="checkbox"
      id="taskFinishedCheckBox"
      checked={props.taskStatus}
    />{" "}
    <label>{props.taskTitle}</label>
  </div>
));

export default TaskComponent;
