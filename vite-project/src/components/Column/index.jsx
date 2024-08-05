import { Card } from "../Cards"

export const Column = ({title, cards}) => {
    return (
        <div className="main__column">
        <div className="column__title">
            <p>{title}</p>
        </div>

        <div className="cards">
            {cards.map((cards) => {
                return (
                    <Card 
                    key={cards._id} 
                    id={cards._id}
                    title={cards.title} 
                    topic={cards.topic} 
                    date={cards.date} 
                    status={cards.status}
                    />
                )
            })}
        </div>



        {/* <Cards cardTheme="Web Design"/>
        <Cards cardTheme="Research"/>
        <Cards cardTheme="Web Design"/>
        <Cards cardTheme="Copywriting"/>
        <Cards cardTheme="Research"/> */}

    </div>
    )
}