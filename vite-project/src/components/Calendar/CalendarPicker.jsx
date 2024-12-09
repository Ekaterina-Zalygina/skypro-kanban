import "react-day-picker/style.css";
import * as S from "./CalendarPicker.styled.js";
import { format } from "date-fns";
import ru from "date-fns/locale/ru";

export function MyDatePicker({ selected, setSelected }) {
  let footer = (
    <S.CalendarContentP>Выберите срок исполнения</S.CalendarContentP>
  );
  if (selected) {
    footer = (
      <S.CalendarContentP>
        Срок исполнения: <span>{format(selected, "dd.MM.yyyy")}</span>
      </S.CalendarContentP>
    );
  }

  return (
    <S.CalendarContent>
      <S.CalendarTtl>Даты</S.CalendarTtl>
      <S.StyledDayPicker
        mode="single"
        selected={selected}
        onSelect={setSelected}
        footer={footer}
        locale={ru}
      />
    </S.CalendarContent>
  );
}
