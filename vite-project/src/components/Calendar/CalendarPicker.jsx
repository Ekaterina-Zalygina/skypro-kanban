import "react-day-picker/style.css";
import * as S from "./CalendarPicker.styled.js"
import { format } from "date-fns";
import ru from "date-fns/locale/ru"


export function MyDatePicker({selected, setSelected}) {
  let footer = <S.CalendarContentP>Выберите срок исполнения</S.CalendarContentP>
  if(selected) {
    footer = (
      <S.CalendarContentP>
        Cрок исполнения {format(selected, "PP", { locale: ru})}
      </S.CalendarContentP>
    )
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
      // footer={
      //   selected ? `Срок исполнения: ${selected.toLocaleDateString()}` : "Выберите срок исполнения"
      // }
    />
    </S.CalendarContent>
  );
}