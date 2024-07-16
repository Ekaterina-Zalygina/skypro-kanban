import { useEffect, useState } from "react"
import { Header } from "../../components/Header"
import { Main } from "../../components/Main"
import { PopBrowse } from "../../components/PopBrowse"
import { PopUser } from "../../components/PopUser"
import { Wrapper } from "../../globalStyle.styled"
import { tasks } from "../../../data"
import loader from "/images/loader.jpg"
import { Outlet } from "react-router-dom"

export const MainPage = ({intoTheme, setIntoTheme}) => {

    const [cards, setCards] = useState(tasks)
    const [isLoading, setIsLoading] = useState(false)

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
        setIsLoading(true)
        setTimeout(() => {
          setIsLoading(false)
        }, 1500)
      }, [])

    return (
        <Wrapper>
          <Outlet/>
          <popNewCard/>
          <PopBrowse />
          {/* <PopUser />  */}
      <Header addCards={addCards} setIntoTheme={setIntoTheme} intoTheme={intoTheme}/>
      {isLoading ? <img src={loader} alt="" /> : <Main cards={cards} />}
    </Wrapper>
    )
}