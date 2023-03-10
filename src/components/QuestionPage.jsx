import { useState } from 'react'
import logo from '../assets/logo.png'
import { cards } from '../questions.js'
import { ConcluidosContainer, Logo, MessagesContainer, QuestionsPageContainer } from './Shared/QuestionPageItem'
import { ButtonImage, ButtonText, QuestionItem, BottomButtons } from './QuestionItem'
import { mappedImgs } from "../assets/images.js"

export function QuestionsPage() {
    const [questions, setQuestions] = useState(() => cards.map((item, i) => ({
        id: i,
        alreadyAnswered: false,
        alreadyOpened: false,
        remembered: "",
        question: item.question,
        answer: item.answer,
        text: `Pergunta ${i}`
    })))
    const [questionTracker, setQuestionTracker] = useState(() => [])

    function openQuestion(e) {
        setQuestions(prev => prev.map(item => {
            if (item.id === Number(e.target.alt)) {
                if (item.remembered === 'turningArrow') {
                    return { ...item, alreadyOpened: true, text: item.answer, remembered: 'none' }
                }
                return { ...item, alreadyOpened: true, text: item.question, remembered: 'turningArrow' }
            }
            return item
        }))
    }
    function setRemembered(e) {
        setQuestions(prev => prev.map(item => {
            if (item.id === Number(e.target.dataset.id)) {

                return { ...item, remembered: e.target.dataset.name, alreadyAnswered: true, text: `Pergunta ${item.id}` }
            }
            return item
        }))
        setQuestionTracker(prev => ([...prev, { id: e.target.dataset.id, value: e.target.dataset.name }]))
    }
    function testImgSrc(imageSrc) {
        if (imageSrc === 'rightIcon') {
            return "zap-icon"
        } else if (imageSrc === 'wrongIcon') {
            return "no-icon"
        } else if (imageSrc === 'almostIcon') {
            return "partial-icon"
        } else if (imageSrc === "turningArrow") {
            return "turn-btn"
        }
         else {
            return "play-btn"
        }
    }
    let alreadyAnsweredItemsCount = questions.filter(item => item?.alreadyOpened === true && item?.alreadyAnswered === true).length
    const isAllRight = questions.length === questions.filter(item => item.remembered === 'rightIcon' || item.remembered === 'almostIcon').length
    const isAllAnswered = alreadyAnsweredItemsCount === questions.length
    return <QuestionsPageContainer alreadyAnsweredItemsCount={isAllAnswered} questionsLength={questions.length}>
        <Logo>
            <img src={logo} alt="logo" />
            <p>ZapRecall!</p>
        </Logo>
        {questions.map((item) => {
            const changeBoxStyle = (item?.alreadyOpened === true && item?.alreadyAnswered === false)
            const openFirstBoxQuestion = item?.remembered === 'none'
            const imageSrc = item?.remembered
            const getImage = item?.remembered ? mappedImgs.get(item?.remembered) : mappedImgs.get("playArrow")
            const turnCard = changeBoxStyle && openFirstBoxQuestion
            const changeBoxToLast = (item?.alreadyOpened === true && item?.alreadyAnswered === true)

            return (
                <QuestionItem key={item.id} data-test="flashcard" isBiggerThanExpected={(item.text.length >= 68)} changeBoxToLast={changeBoxToLast} turnCard={turnCard} changeBox={changeBoxStyle} changeFlexDirection={openFirstBoxQuestion} >
                    <ButtonText data-test="flashcard-text" isBiggerThanExpected={(item.text.length >= 68)} imageSrc={imageSrc} changeBoxToLast={changeBoxToLast} turnCard={turnCard} changeBox={changeBoxStyle}>{item?.text}</ButtonText>
                    <ButtonImage 
                    data-test={testImgSrc(imageSrc)}
                    changeBoxToLast={changeBoxToLast}
                    onClick={(e) => item?.alreadyAnswered === false && openQuestion(e)}
                    openFirstBoxQuestion={openFirstBoxQuestion}
                    changeBox={changeBoxStyle}
                    src={getImage}
                    alt={item?.id} />
                    {openFirstBoxQuestion && <BottomButtons turnCard={turnCard} >
                        <div data-test="no-btn" onClick={(e) => setRemembered(e)} data-id={item?.id} data-name={'wrongIcon'}>N??o lembrei</div>
                        <div data-test="partial-btn" onClick={(e) => setRemembered(e)} data-id={item?.id} data-name={'almostIcon'}>Quase n??o lembrei</div>
                        <div data-test="zap-btn" onClick={(e) => setRemembered(e)} data-id={item?.id} data-name={'rightIcon'}>Zap!</div>
                    </BottomButtons>}
                </QuestionItem>
            )
        })}
        <MessagesContainer data-test="finish-text"  shouldDisplay={isAllAnswered}>
            {alreadyAnsweredItemsCount && isAllRight && <p>{"????"} <span>{"Parab??ns!"}</span></p>}
            {alreadyAnsweredItemsCount && isAllRight && <p>{"Voc?? n??o esqueceu de nenhum flashcard!"}</p>}
            {alreadyAnsweredItemsCount && !isAllRight && <p>{"????"} <span>{"Putz...!"}</span></p>}
            {alreadyAnsweredItemsCount && !isAllRight && <p>{"Ainda faltam alguns... Mas n??o desanime!"}</p>}
        </MessagesContainer>
        <ConcluidosContainer  data-test="footer">
            <p>{alreadyAnsweredItemsCount}/{questions.length} Conclu??dos</p>
            <div>
                {questionTracker.map((item, index) => <img data-test={testImgSrc(item.value)} key={item.id} src={mappedImgs.get(item.value)} alt="answerIcon" />)}
            </div>
        </ConcluidosContainer>
    </QuestionsPageContainer>
}


