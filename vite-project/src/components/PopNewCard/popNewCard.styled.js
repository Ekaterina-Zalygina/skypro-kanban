import styled from "styled-components";
import { Hover01 } from "../../globalStyle.styled.js";

export const NewCard = styled.div`
  width: 100%;
  min-width: 375px;
  height: 100%;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 6;
`;

export const NewCardContainer = styled.div`
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

export const NewCardBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #ffffff;
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 48px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  position: relative;
  background-color: ${({ theme }) => theme.newCardBody};
`;

export const NewCardContent = styled.div`
  display: block;
  text-align: left;
`;

export const NewCardTtl = styled.h3`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.newCardTtl};
`;

export const NewCardClose = styled.a`
  position: absolute;
  top: 20px;
  right: 30px;
  color: #94a6be;
  cursor: pointer;

  &:hover {
    color: #000000;
  }
`;

export const NewCardWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const NewCardForm = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;
`;

export const FormNewBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NewCardSubttl = styled.label`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  color: ${({ theme }) => theme.newCardSubttl};
`;

export const FormNewInput = styled.input`
  margin: 20px 0;
  width: 100%;
  outline: none;
  padding: 14px;
  background: transparent;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  color: #000;

  &::placeholder {
    font-weight: 400;
    color: #94a6be;
  }
`;

export const FormNewArea = styled.textarea`
  max-width: 370px;
  margin-top: 14px;
  height: 200px;
  width: 100%;
  outline: none;
  padding: 14px;
  background: transparent;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  color: #000;

  &::placeholder {
    font-weight: 400;
    color: #94a6be;
  }
`;

export const CategoriesP = styled.p`
  margin-bottom: 14px;
  color: ${({ theme }) => theme.categoriesP};
`;

export const CategoriesThemes = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const CategoriesActive = styled.input`
  display: none;

  &:checked + label {
    opacity: 1;
  }
`;

export const RadioCategories1 = styled.label`
  display: inline-block;
  padding: 8px 20px;
  border-radius: 24px;
  color: ${({ theme }) => theme.radioCategories1Text};
  background: #ffe4c2;
  cursor: pointer;
  margin-right: 7px;
  opacity: 0.4;
  transition: opacity 0.3s;
  background-color: ${({ theme }) => theme.radioCategories1};

  &:hover,
  &.active {
    opacity: 1;
  }
`;

export const RadioCategories2 = styled.label`
  display: inline-block;
  padding: 8px 20px;
  border-radius: 24px;
  color: ${({ theme }) => theme.radioCategories2Text};
  background: #b4fdd1;
  cursor: pointer;
  margin-right: 7px;
  opacity: 0.4;
  transition: opacity 0.3s;
  background-color: ${({ theme }) => theme.radioCategories2};

  &:hover,
  &.active {
    opacity: 1;
  }
`;

export const RadioCategories3 = styled.label`
  display: inline-block;
  padding: 8px 20px;
  border-radius: 24px;
  color: ${({ theme }) => theme.radioCategories3Text};
  background: #e9d4ff;
  cursor: pointer;
  margin-right: 7px;
  opacity: 0.4;
  transition: opacity 0.3s;
  background-color: ${({ theme }) => theme.radioCategories3};

  &:hover,
  &.active {
    opacity: 1;
  }
`;

export const FormNewCreate = styled.button`
  width: 132px;
  height: 30px;
  background-color: #565eef;
  border-radius: 4px;
  border: 0;
  outline: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  color: #ffffff;
  float: right;
  cursor: pointer;

  ${Hover01}
`;
