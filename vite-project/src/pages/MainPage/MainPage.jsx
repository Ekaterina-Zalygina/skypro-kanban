import { useContext, useEffect, useState } from "react"
import { Header } from "../../components/Header"
import { Main } from "../../components/Main"
import { Wrapper } from "../../globalStyle.styled"
// import { tasks } from "../../../data"
import loader from "/images/loader.jpg"
import { Outlet } from "react-router-dom"
import { getTasks } from "../../API/tasks"
import { userContext } from "../../context/userContext"
import { TaskContext } from "../../context/taskContext"

export const MainPage = ({intoTheme, setIntoTheme}) => {

  const {user} = useContext(userContext) //на будущее - лучше писать с большой буквы UserContext
    const {tasks, setTasks} = useContext(TaskContext)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState()

    // const addCards = () => {

    //     const newCard = {
    //       id: tasks.length + 1,
    //       topic: "Web Design",
    //       title: "Новая задача",
    //       date: "30.10.2023",
    //       status: "Без статуса"
    //     }
  
    //     setTasks([...tasks, newCard]) 
    //   }
  
      useEffect(() => {
        getTasks(user.token).then ((res) => {
          setTasks(res.tasks)
        })
        .catch((error) => {
          console.log(error.message)
          setError(error.message)
        })
        .finally(() => {
          setIsLoading(false)
        })
      }, [])

    return (
        <Wrapper>
          <Outlet/>
          <popNewCard/>
          {/* <PopBrowse /> */}
          {/* <PopUser />  */}
      <Header setIntoTheme={setIntoTheme} intoTheme={intoTheme}/>
      {isLoading ? <img src={loader} alt="" /> : error ? <p>{error}</p> : <Main cards={tasks} />}
    </Wrapper>
    )
}