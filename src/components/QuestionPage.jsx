import img from '../assets/icone_certo.png'
import logo from '../assets/logo.png'
import {cards} from '../questions.js'
import { ButtonImage, ButtonText, ConcluidosContainer, Logo, MessagesContainer, QuestionItem, QuestionsPageContainer } from './Shared/QuestionPageItem'

export function QuestionsPage() {
    console.log(cards)

    return <QuestionsPageContainer>
        <Logo>
            <img src={logo} alt="" />
            <p>ZapRecall!</p>
        </Logo>
        <QuestionItem>
            <ButtonText>{"Texto"}</ButtonText>
            <ButtonImage src={img} alt="icon" />
        </QuestionItem>
        <QuestionItem>
            <ButtonText>{"Texto"}</ButtonText>
            <ButtonImage src={img} alt="icon" />
        </QuestionItem>
        <QuestionItem>
            <ButtonText>{"Texto"}</ButtonText>
            <ButtonImage src={img} alt="icon" />
        </QuestionItem>
        <QuestionItem>
            <ButtonText>{"Texto"}</ButtonText>
            <ButtonImage src={img} alt="icon" />
        </QuestionItem>
        <MessagesContainer>
            <p>{"🙂"} <span>{"Parabéns!"}</span></p>
            <p>{"Você não esqueceu de nenhum flashcard!"}</p>
        </MessagesContainer>
        <ConcluidosContainer>
            <p>{"3"}/{"4"} Concluídos</p>
            <div>
                <img src={img} alt="" />
                <img src={img} alt="" />
                <img src={img} alt="" />
            </div>
        </ConcluidosContainer>
    </QuestionsPageContainer>
}