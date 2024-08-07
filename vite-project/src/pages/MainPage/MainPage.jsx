import { useEffect, useState } from "react"
import { Header } from "../../components/Header"
import { Main } from "../../components/Main"
import { Wrapper } from "../../globalStyle.styled"
// import { tasks } from "../../../data"
import loader from "/images/loader.jpg"
import { Outlet } from "react-router-dom"
import { getTasks } from "../../API/tasks"

export const MainPage = ({intoTheme, setIntoTheme, user, setUser}) => {

    const [cards, setCards] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState()

    const addCards = () => {

        const newCard = {
          id: cards.length + 1,
          topic: "Web Design",
          title: "Новая задача",
          date: "30.10.2023",
          status: "Без статуса"
        }
  
        setCards([...cards, newCard]) 
      }
  
      useEffect(() => {
        getTasks(user.token).then ((res) => {
          setCards(res.tasks)
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
      <Header addCards={addCards} setIntoTheme={setIntoTheme} intoTheme={intoTheme} setUser={setUser} user={user}/>
      {isLoading ? <img src={loader} alt="" /> : error ? <p>{error}</p> : <Main cards={cards} />}
    </Wrapper>
    )
}