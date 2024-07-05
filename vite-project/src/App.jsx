import { useEffect, useState } from 'react'
import './App.css'
import { Header } from "./components/Header"
import { Main } from "./components/Main"
import { tasks } from '../data'
import loader from "/images/loader.jpg"
import { GlobalStyle } from './globalStyle.styled.js'

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
        <div className="wrapper">
       <Header addCards={addCards}/>
       {isLoading ? <img src={loader} alt="" /> : <Main cards={cards} />}
       </div>
    </>

  )
}

export default App