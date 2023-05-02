import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import "./Task.css"
import { CgClose, CgInfo } from "react-icons/cg"


export default function Task({ task, handleTaskClick, handleTaskDeletion }) {
  const history = useHistory()

  const handleTaskDetailsClick = () => {
    history.push(`/${task.title}`)
  }

  return (
    <div
      className="task-container"
      style={task.completed ? { borderLeft: '6px solid #7fff00', color: '#eee9' } : {}}
    >
      <div className="task-title" onClick={() => handleTaskClick(task.id)}>
        {task.title}
      </div>

      <div className="buttons-container">
        <button
          className="see-task-details-button"
          onClick={handleTaskDetailsClick}
        ><CgInfo />
        </button>
        <button
          className="remove-task-button"
          onClick={() => handleTaskDeletion(task.id)}
        ><CgClose />
        </button>
      </div>
    </div >
  )
}