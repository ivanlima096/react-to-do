import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import Button from "./Button";
import "./TaskDetails.css"


export default function TaskDetails() {
  const params = useParams()
  const history = useHistory()

  const handleBackButtonClick = () => {
    history.goBack()
  }

  return (
    <>
      <div className="back-button-container">
        <Button onClick={handleBackButtonClick}>Voltar</Button>
      </div>
      <div className="task-details-container">
        <h2>{params.taskTitle}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil optio deserunt in non mollitia vitae?</p>
      </div>
    </>
  )
}