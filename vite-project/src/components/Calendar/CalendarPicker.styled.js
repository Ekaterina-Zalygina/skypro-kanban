import { DayPicker } from "react-day-picker";
import styled from "styled-components";

export const CalendarContent = styled.div`
  width: 168px;
  height: 172px;
  margin-bottom: 12px;
  margin-left: 20px;
`;

export const CalendarTtl = styled.p`
  // margin-bottom: 14px;

  color: ${({ theme }) => theme.calendarText};
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const StyledDayPicker = styled(DayPicker)`
  --rdp-accent-color: #94a6be;
  --rdp-day_button-width: 12px;
  --rdp-day_button-height: 12px;

  --rdp-day-width: 24px;
  --rdp-day-height: 24px;

  width: 100%;
  /* display: flex; */
  align-items: center;
  justify-content: space-between;
  margin-top: 14px;
  margin: 0 0px;
  /* padding: 0 10px; */
  /* width: 168px;
  height: 172px; */

  background-color: ${({ theme }) => theme.calendarColor};
  color: var(--rdp-accent-color);

  .rdp {
    margin: 0em;
  }

  .dp-chevron {
    display: inline-block;
    height: 10px;
    fill: var(--rdp-accent-color);
  }

  .rdp-month_caption {
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;

    color: var(--rdp-accent-color);
  }

  .rdp-table {
    width: 168px;
  }
  .rdp-caption_label {
    color: var(--rdp-accent-color);
    font-size: 14px;
    line-height: 25px;
    font-weight: 600;
  }
  .rdp-day {
  }
  .rdp-day_button {
    font-size: 10px;
    padding: 10px;
  }
  .rdp-head_cell {
    font-size: 10px;
  }
  .rdp-cell {
    width: 22px;
    height: 22px;
    margin: 4px;
    border-radius: 30%;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    color: var(--rdp-accent-color);
    font-size: 10px;
    line-height: 1;
    letter-spacing: -0.2px;
    cursor: pointer;
  }
  .rdp-button_reset.rdp-button.rdp-day {
    width: 22px;
    height: 22px;
    font-size: 10px;
  }
  .rdp-day_selected {
    background-color: var(--rdp-accent-color);
  }
  .rdp-nav_icon {
    width: 14px;
    height: 6px;
  }
  p {
    margin-top: 14px;
    width: 100%;
    height: 22px;
    font-size: 10px;
  }
`;

export const CalendarContentP = styled.div`
  margin-top: 14px;
  font-size: 10px;
  color: ${({ theme }) => theme.deleteText} & span {
    color: #000;
  }
`;

// export const CalendarDaysNames = styled.div`
//   display: flex;
//   flex-wrap: nowrap;
//   align-items: center;
//   justify-content: space-between;
//   margin: 7px 0;
//   padding: 0 7px;
// `

// export const CalendarDayName = styled.div`
//   color: #94A6BE;
//   font-size: 10px;
//   font-weight: 500;
//   line-height: normal;
//   letter-spacing: -0.2px;
// `
// export const CalendarCells = styled.div`
//   width: 182px;
//   height: 126px;
//   display: flex;
//   flex-wrap: wrap;
// `

// export const CalendarCell = styled.div`
//   width: 22px;
//   height: 22px;
//   margin: 2px;
//   border-radius: 50%;
//   display: flex;
//   flex-wrap: nowrap;
//   align-items: center;
//   justify-content: center;
//   color: #94A6BE;
//   font-size: 10px;
//   line-height: 1;
//   letter-spacing: -0.2px;
//   cursor: pointer;
// `
