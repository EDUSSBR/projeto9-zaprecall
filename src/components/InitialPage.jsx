import { InitialPageButton, InitialPageContainer, LogoImg, LogoText } from "./components/Shared/InitialPageItems";
import logo from "./assets/logo.png";


export function InitialPage() {
  return (<InitialPageContainer>
    <LogoImg src={logo} />
    <LogoText>ZapRecall</LogoText>
    <InitialPageButton>Iniciar Recall!</InitialPageButton>
  </InitialPageContainer>)
}