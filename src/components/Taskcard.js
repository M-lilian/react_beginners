import "./Taskcard.css";
import styles from "./Taskcard.module.css"
export const Taskcard = ({task,handleDelete,info}) => {
    return (
        <div>
        <li className ={`taskcard ${task.completed ? "completed" : "incompleted"}`}>
        <span className={styles.title }>{task.id} - {task.name} -{info} </span>
        <button  onClick={() =>handleDelete(task.id)} className='delete'>Delete</button>
        </li>
        </div>
    )
}
