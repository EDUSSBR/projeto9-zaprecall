import { InitialPageButton, InitialPageContainer, LogoImg, LogoText } from "./Shared/InitialPageItems";
import logo from "../assets/logo.png";
export function InitialPage({changePage}) {
  return (<InitialPageContainer>
    <LogoImg src={logo} />
    <LogoText>ZapRecall</LogoText>
    <InitialPageButton onClick={changePage}>Iniciar Recall!</InitialPageButton>
  </InitialPageContainer>)
}