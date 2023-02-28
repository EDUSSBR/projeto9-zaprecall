import styled from "styled-components";
export const InitialPageContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.pinkBg} ;
  height:100%;
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
  border: 1px solid ${({ theme }) => theme.colors.welcomeBgBorder};
`;

export const LogoImg = styled.img`
    width:136px;
    height:161px;
    margin-bottom:13px;
`;

export const LogoText = styled.p`
    color: ${({ theme }) => theme.colors.white};
    font-family: 'Righteous';
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    text-align: center;
    letter-spacing: -0.012em;
    margin-bottom:30px;
`

export const InitialPageButton = styled.button`
  width: 246px;
  height: 54px;
  color: ${({ theme }) => theme.colors.welcomeBtnAndBorderColor};
  border: 1px solid ${({ theme }) => theme.colors.welcomeBtnAndBorderColor};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
`
