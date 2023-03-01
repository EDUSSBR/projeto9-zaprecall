
import styled from "styled-components";
import { InitialPageContainer } from "./InitialPageItems";

export const QuestionsPageContainer = styled(InitialPageContainer)`
display:flex;
justify-content:flex-start;
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
export const QuestionItem = styled.button`
min-width: 300px;
height: 65px;
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
background-color: ${({ theme }) => theme.colors.white};
border-radius: 5px;
display: flex;
justify-content: space-between;
padding: 19px 15px;
margin-bottom:25px;
`
export const ButtonText = styled.p`
color: ${({ theme }) => theme.colors.black};
align-self: center;
`
export const ButtonImage = styled.img`
align-self: center;
`

export const ConcluidosContainer = styled.div`
position:fixed;
bottom:0px;
left:0px;
width: 100%;
/* max-width: */
/* height: 'fit-content'; */
height: 70px;
display:flex;
align-items:center;
justify-content:space-between;
flex-direction:column;
background-color: ${({ theme }) => theme.colors.white};
padding:10px;

p{
  color: ${({ theme }) => theme.colors.black};
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
  display:flex;
  flex-direction:column;
  align-items:center;
  /* justify-content:center; */
  background-color: ${({ theme }) => theme.colors.white};
  p:first-child {
    margin-top: 16px;
    margin-bottom: 14px;
    font-family: 'Recursive';
    font-size: 18px;
    line-height: 22px;
    /* height:22px; */
  }
  p {
    font-family: 'Recursive';
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
  }

`