
import styled from "styled-components";
import { InitialPageContainer } from "./InitialPageItems";

export const QuestionsPageContainer = styled(InitialPageContainer)`
height: fit-content;
display:flex;
justify-content:flex-start;
& > :nth-child(${({ questionsLength }) => questionsLength + 1}){
    margin-bottom: ${({ alreadyAnsweredItemsCount }) => alreadyAnsweredItemsCount ? '195px' : '95px'};
  }
`
export const Logo = styled.div`
display:flex;
align-items:center;
justify-content:center;
margin-bottom:50px;
margin-top:42px;
img {
  width: 52px;
  height: 60px;
}
p {
  width: 203.17px;
  height: 44px;
  color: ${({ theme }) => theme.colors.white};
  font-family: 'Righteous';
  font-weight: 400;
  font-size: 36px;
  line-height: 45px;
  text-align: center;
  letter-spacing: -0.012em;
}
`
export const ConcluidosContainer = styled.div`
position:fixed;
bottom:0px;
left:0px;
width: 100%;
height: 70px;
display:flex;
align-items:center;
justify-content:space-between;
flex-direction:column;
background-color: ${({ theme }) => theme.colors.white};
padding:10px;
p{
  color: ${({ theme }) => theme.colors.answerAndIconBlack};
  font-family: 'Recursive';
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
}
img {
  width:23px;
  height:23px;
  margin-left:5px;
}
`
export const MessagesContainer = styled.div`
  position:fixed;
  bottom:70px;
  left:0px;
  width: 100%;
  height: 101px;
  display: ${({ shouldDisplay }) => shouldDisplay ? 'flex' : 'none'} ;
  flex-direction:column;
  align-items:center;
  background-color: ${({ theme }) => theme.colors.white};
  p:first-child {
    margin-top: 16px;
    margin-bottom: 14px;
    font-family: 'Recursive';
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
  }
  p {
    font-family: 'Recursive';
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
  }

`