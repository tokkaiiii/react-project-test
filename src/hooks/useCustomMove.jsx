import {useNavigate} from "react-router-dom";

const useCustomMove = () => {

  const navigate = useNavigate()

  const moveToList = () => {
    navigate({pathname: `../list`})
  }

  const moveToRead = (id) => {
    navigate({pathname: `../read/${id}`})
  }

  const moveToModify = (id) => {
    navigate({pathname: `../modify/${id}`})
  }

  return {moveToList, moveToRead, moveToModify}
}

export default useCustomMove