import styled from "styled-components"

export const QuestionItem = styled.button`
  transition: height 0.2s ease-in-out, background-color 0.5s ease-in-out, transform 0.6s ease-in-out;
  min-width: 300px;
  max-width: 300px;
  height: ${({ changeBox,isBiggerThanExpected }) => {
    if (!changeBox){
      return '65px'
    }
     else if (isBiggerThanExpected){
      return 'fit-content'
    } 
    else {
      return '131px'
    }
  }};
  background-color: ${({ theme, changeBox }) => changeBox ? theme.colors.questionBg : theme.colors.white};
  padding: ${({ changeBox }) => changeBox ? '6px' : '20px 15px'}; 
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  flex-direction: ${({ changeFlexDirection }) => changeFlexDirection ? 'column' : 'row'};
  margin-bottom:25px;
  position: ${({ turnCard }) => turnCard && 'relative'};
  transform: ${({ turnCard }) => turnCard && 'rotateY(-180deg)'};
  & > * {
    transform: ${({ turnCard }) => turnCard && 'rotateY(-180deg)'};
  }
`
export const ButtonText = styled.p`
  animation: ${({ turnCard, changeBoxToLast }) => {
    if (turnCard) {
      return '0.4s linear 0s changeOpacity forwards'
    } else if (changeBoxToLast) {
      return '0.5s linear 1s changeOpacity backwards'
    }
  }}; 
  font-weight: ${({ changeBox }) => changeBox ? 400 : 700}; 
  font-size: ${({ changeBox }) => changeBox ? "18px" : "16px"}; 
  line-height: ${({ changeBox }) => changeBox ? "22px" : "19px"}; 
  color: ${({ theme, imageSrc }) => {
    if (imageSrc === 'rightIcon') {
      return theme.colors.correctGreen
    } else if (imageSrc === 'wrongIcon') {
      return theme.colors.incorrectRed
    } else if (imageSrc === 'almostIcon') {
      return theme.colors.correctYellow
    }
    return theme.colors.answerAndIconBlack
  }};
  text-decoration: ${({ changeBoxToLast }) => changeBoxToLast && 'line-through'};
  align-self: center;
  height:100%;
  width:100%;
  word-wrap: break-word;
  margin-bottom: ${({isBiggerThanExpected})=> isBiggerThanExpected ? "4px": '0px'};

`
export const ButtonImage = styled.img`
align-self:  ${({ changeBox }) => changeBox ? 'flex-end' : 'center'};
width:  ${({ changeBox, changeBoxToLast }) => {
  if (changeBox) {
    return '30px'
  } else if (changeBoxToLast){
    return '23px'
  } else {
    return '20px'
  }}};
height:  ${({ changeBox }) => changeBox ? '20px' : '23px'};
display: ${({ openFirstBoxQuestion }) => openFirstBoxQuestion && 'none'};
position: ${({ openFirstBoxQuestion }) => openFirstBoxQuestion && 'absolute'};
animation: ${({ changeBoxToLast }) => changeBoxToLast && '0.4s linear 0s changeOpacity backwards'}; 
`
export const BottomButtons = styled.div`
display:flex;
width:100%;
align-items:center;
justify-content:space-between;
flex-direction: row;
align-self: flex-end;
justify-self: flex-end;
animation: ${({ turnCard }) => turnCard && '0.4s linear 0s changeOpacity'};
* {
        width: 85.17px;
        height: 37.17px;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        text-align: center;
        color: ${({ theme }) => theme.colors.white};
        border-radius: 5px;
        border: 0px solid transparent;
    }
    div:first-child {
        background-color: ${({ theme }) => theme.colors.incorrectRed}
    }
    div:nth-child(2) {
        background-color: ${({ theme }) => theme.colors.correctYellow}
    }
    div:nth-child(3) {
        background-color: ${({ theme }) => theme.colors.correctGreen}
    }
`