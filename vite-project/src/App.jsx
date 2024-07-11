import { useEffect, useState } from 'react'
import './App.css'
import { Header } from "./components/Header"
import { Main } from "./components/Main"
import { tasks } from '../data'
import loader from "/images/loader.jpg"
import { GlobalStyle, Wrapper } from './globalStyle.styled'
import { PopUser } from "./components/PopUser"
// import { popNewCard } from "./components/PopNewCard"
import { PopBrowse } from "./components/PopBrowse"

function App() {

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
    <>
    <GlobalStyle/>
      <Wrapper>
          {/* <popNewCard/> */}
          <PopBrowse />
          <PopUser /> 
      <Header addCards={addCards}/>
      {isLoading ? <img src={loader} alt="" /> : <Main cards={cards} />}
    </Wrapper>
    </>

  )
}

export default App