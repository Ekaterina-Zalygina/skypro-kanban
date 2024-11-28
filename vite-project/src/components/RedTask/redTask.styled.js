import styled from "styled-components";
import { topicStyles } from "../../themeStyles";

export const popBrowse = styled.div`
  /* display: none; */
  width: 100%;
  height: 100%;
  min-width: 375px;
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 7;
`;

export const popBrowseContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
`;

export const popBrowseBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #ffffff;
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 38px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  position: relative;
  background-color: ${({ theme }) => theme.containerPopBrowse};
`;

export const popBrowseContent = styled.div`
  display: block;
  text-align: left;
`;

export const popBrowseTopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;

export const popBrowseTtl = styled.input`
  /* color: #000; */
  border: none;
  background: transparent;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  color: ${({ theme }) => theme.newCardSubttl};
`;

export const CategoriesThemeTopic = styled.div`
  font-size: 14px;
  font-weight: 600;
  line-height: 14px;
  white-space: nowrap;
`;

export const CategoriesTheme = styled.div`
  width: 115px;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  opacity: 1;
  text-align: center;
  ${({ $themeColor }) => topicStyles[$themeColor]}
`;

export const StatusThemeEdit = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const Status = styled.div`
  margin-bottom: 11px;
`;

export const StatusTitileBrowse = styled.div`
  font-size: 14px;
  font-weight: 600;
  line-height: 16px;
  margin-bottom: 14px;
  color: ${({ theme }) => theme.newCardTtl};
`;

export const StatusTheme = styled.div`
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  max-width: 136px;
  /* max-height: 30px; */
  text-align: center;
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;
  font-size: 14px;
  background-color: #94a6be;
  color: #ffffff;
`;

export const PopBrowseWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 21px;
`;

export const PopBrowseForm = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;
`;

export const FormBrowseBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PopBrowseSubttl = styled.label`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  color: ${({ theme }) => theme.newCardSubttl};
`;

export const PopBrowseArea = styled.textarea`
  min-width: 370px;
  width: 100%;
  outline: none;
  padding: 14px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-top: 14px;
  height: 200px;
  background-color: ${({ theme }) => theme.popBrowseArea};
  color: ${({ theme }) => theme.colorArea};

  /* &:read-only {
    background: ${({ theme }) => theme.popBrowseArea};
  } */

  &::-moz-placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }
`;

export const CalendarPopBrowse = styled.p`
  width: 100%;
`;

export const CalendarNav = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 7px;
`;

export const CalendarPeriod = styled.div`
  padding: 0 7px;
`;

export const PopBrowseBtn = styled.div`
  display: none;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  button {
    height: 30px;
    margin-bottom: 10px;
    padding: 0 14px;
    margin-right: 8px;
  }
`;

export const PopBrowseGroup = styled.div`
  button {
    margin-right: 8px;
  }
`;

export const ButtonBorDelete = styled.button`
  border-radius: 4px;
  border: 0.7px solid
    var(--palette-navy-60, ${({ theme }) => theme.deleteBorder});
  outline: none;
  background: transparent;
  color: ${({ theme }) => theme.deleteText};

  &:hover {
    background-color: #565eef;
    color: #ffffff;
  }
`;

export const ButtonBorCancel = styled.button`
  border-radius: 4px;
  border: 0.7px solid
    var(--palette-navy-60, ${({ theme }) => theme.deleteBorder});
  outline: none;
  background: transparent;
  color: ${({ theme }) => theme.cancelText};

  &:hover {
    background-color: #565eef;
    color: #ffffff;
  }
`;

export const ButtonBorSave = styled.button`
  border-radius: 4px;
  border: 0.7px solid var(--palette-navy-60, #565eef);
  outline: none;
  background-color: #565eef;
  color: #ffffff;

  &:hover {
    background-color: #ffffff;
    a {
      color: #565eef;
    }
  }
`;

export const ButtonBorClose = styled.button`
  border-radius: 4px;
  border: 0.7px solid var(--palette-navy-60, #565eef);
  outline: none;
  background: transparent;
  background-color: #565eef;
  a {
    color: #ffffff;
  }

  &:hover {
    background-color: #ffffff;
    a {
      color: #565eef;
    }
  }
`;

export const CalendarBlock = styled.div`
  display: block;
`;
