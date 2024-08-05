import styled from "styled-components";
import { Green, Orange, Purple } from "../../globalStyle.styled";

export const Cards = styled.div`
  width: 100%;
  display: block;
  position: relative;
`

export const CardsItem = styled.div`
  padding: 5px;
  animation-name: card-animation;
  animation-duration: 500ms;
  animation-timing-function: linear;
`

export const CardCards = styled.div`
  width: 220px;
  height: 130px;
  background-color: ${({theme}) => theme.card};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
  padding: 15px 13px 19px;
`

export const CardGroup = styled.div`
  width: 100%;
  height: 20px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const CardTheme = styled.div`
  width: auto;
  height: 20px;
  padding: 5px 14px;
  border-radius: 18px;

  ${({$color}) => $color === "Web Design" && Orange}
  ${({$color}) => $color === "Copywriting" && Purple}
  ${({$color}) => $color === "Research" && Green}

  p {
  font-size: 10px;
  font-weight: 600;
  line-height: 10px;
  }
`

export const CardBtn = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2px;

  div {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #94A6BE;
  }
`

export const CardContent = styled.div`
height: 64px;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-between;
`

export const CardTitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: ${({theme}) => theme.title};
  margin-bottom: 10px;
`

export const CardDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  p {
  margin-left: 6px;
  font-size: 10px;
  line-height: 13px;
  color: #94A6BE;
  letter-spacing: 0.2px;
  }
`

export const clipPath = styled.div`
margin-left: -13px;
`

export const CardDateI = styled.div`
font-family: Roboto;
font-size: 10px;
font-weight: 400;
line-height: 11.72px;
letter-spacing: 0.01em;
text-align: left;
color: ${({theme}) => theme.calendar};
display: flex;
gap: 6px;
`