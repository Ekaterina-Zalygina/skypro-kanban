import { Column } from "../Column";
import { statusList } from "../../../data.js";
import { Container } from "../../globalStyle.styled.js";
import * as S from "./Main.styled.js"

export const Main = ({cards}) => {

    return (
        <S.Main>
        <Container>

            <S.MainContent>
                {statusList.map((status, i) => (
                 <Column key={i} title={status} cards={cards.filter((card) => card.status === status)} />    
                ))}
            </S.MainContent>
        </Container>
        </S.Main>
    )
}