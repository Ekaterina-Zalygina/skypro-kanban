import { Link } from "react-router-dom";
import * as S from "./cards.styled.js";
import { format } from "date-fns";

export const Card = ({ topic, title, date, id }) => {
  return (
    <S.Cards>
      <S.CardsItem>
        <S.CardCards>
          <S.CardGroup>
            <S.CardTheme $color={topic}>
              <p>{topic}</p>
            </S.CardTheme>
            <Link to={`/card/${id}`}>
              <S.CardBtn>
                <div></div>
                <div></div>
                <div></div>
              </S.CardBtn>
            </Link>
          </S.CardGroup>
          <S.CardContent>
            <a href="" target="_blank">
              <S.CardTitle>{title}</S.CardTitle>
            </a>
            <S.CardDate>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"></svg>
            </S.CardDate>
            <S.CardDateI>
              <img src="images/calendar.png" alt="" />
              {format(date, "dd.MM.yyyy")}
            </S.CardDateI>
          </S.CardContent>
        </S.CardCards>
      </S.CardsItem>
    </S.Cards>
  );
};
