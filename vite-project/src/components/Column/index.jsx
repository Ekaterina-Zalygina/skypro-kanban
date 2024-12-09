import { Card } from "../Cards";
import * as S from "./Column.styled.js";

export const Column = ({ title, cards }) => {
  return (
    <S.mainColumn>
      <S.columnTitle>
        <p>{title}</p>
      </S.columnTitle>
      <S.Cards>
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
          );
        })}
      </S.Cards>
    </S.mainColumn>
  );
};
