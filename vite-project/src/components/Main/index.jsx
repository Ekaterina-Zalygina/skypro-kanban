import { Column } from "../Column";
import { statusList } from "../../../data.js";
import { Container } from "../../globalStyle.styled.js";

export const Main = ({cards}) => {

    return (
        <main className="main">
        <Container>

            <div className="main__content">
                {statusList.map((status, i) => (
                 <Column key={i} title={status} cards={cards.filter((card) => card.status === status)} />    
                ))}
             {/* <Column title={'Без статуса'} cards={cards.filter((card) => card.status === "Без статуса")} />
             <Column title={'Нужно сделать'} cards={cards.filter((card) => card.status === "Нужно сделать")} />
             <Column title={'В работе'} cards={cards.filter((card) => card.status === "В работе")} />
             <Column title={'Тестирование'} cards={cards.filter((card) => card.status === "Тестирование")} />
             <Column title={'Готово'} cards={cards.filter((card) => card.status === "Готово")} /> */}
            </div>
            
            {/* <div className="main__block">
                <div className="main__content">
                    <Column title="Без заголовка"/>
                    <Column title="Нужно сделать"/>
                    <Column title="В работе"/>
                    <Column title="Тестирование"/>
                    <Column title="Готово"/>
                </div>
            </div> */}
        </Container>
        </main>
    )
}