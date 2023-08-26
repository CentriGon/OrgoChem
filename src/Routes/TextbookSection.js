import { useEffect, useRef, useState } from "react";
import { NavBar } from "../components/NavBar"
import { useParams } from "react-router-dom"
import { PDF } from "../components/LoadPDF";


export const TextbookSection = () => {
    const { chapterId } = useParams();
    const [pdfSrcs, setPdfSrcs] = useState([]);
    const [currentDoc, setCurrentDoc] = useState();
    const [currentDocIndex, setCurrentDocIndex] = useState(0);
    const [userAnswer, setUserAnswer] = useState(0);
    const quizQuestionsRef = useRef([])
    const questionIndexRef = useRef(0);
    const numPagesRef = useRef(0);
    const currentQuizRef = useRef(-1);
    const correctAnswerRef = useRef(0);
    

    useEffect(() => {
        if (chapterId == 12) {
            numPagesRef.current = 32;
        }

        let array = []
        for (let i = 0; i < numPagesRef.current; i++) {
            array.push(require("../pdfs/chap" + chapterId + "PDFs/chap" + chapterId + "_page_" + (i + 1) + ".pdf"))
        }

        setPdfSrcs(array);
        setCurrentDoc(array[0]);
    }, [])

    const nextPage = () => {
        if (currentDocIndex + 1 < numPagesRef.current) {
            setCurrentDoc(pdfSrcs[currentDocIndex + 1]);
            setCurrentDocIndex(currentDocIndex + 1);
        }
        else {
            return;
        }
    }

    const previousPage = () => {
        if (currentDocIndex > 0) {
            setCurrentDoc(pdfSrcs[currentDocIndex - 1]);
            setCurrentDocIndex(currentDocIndex - 1);
        }
        else {
            return;
        }
    }

    const jumpPage = () => {
        let pageNum = document.getElementById("jump-to-page").value - 1;
        if (pageNum >= 0 && pageNum < numPagesRef.current) {
            setCurrentDoc(pdfSrcs[pageNum]);
            setCurrentDocIndex(pageNum);
        }
    }

    const startQuiz = async () => {

        let response = await fetch(("https://chem-orgo-server.onrender.com/chapter12Questions/" + (currentDocIndex+1)))
        response = await response.json();

        
        const screenCover = document.querySelector(".screen-cover");
        screenCover.setAttribute("id", "gray-out");

        for (let i = 0; i < response.length; i++ ) {
            [response[i].answers, response[i].correctAnswer] = randomizeArray(response[i].answers, response[i].correctAnswer);
        }

        quizQuestionsRef.current = response;
        if (true) {
            document.querySelector(".question-text").textContent = quizQuestionsRef.current[questionIndexRef.current].question;
            changeQuestion(quizQuestionsRef.current.length, questionIndexRef.current)
            for (let i = 0; i < 4; i++) {
                document.querySelector(".option" + (i+1)).textContent = quizQuestionsRef.current[questionIndexRef.current].answers[i];
                correctAnswerRef.current = quizQuestionsRef.current[questionIndexRef.current].correctAnswer;
            }
        }
    }

    const closeQuiz = () => {
        const screenCover = document.querySelector(".screen-cover");
        screenCover.removeAttribute("id");
    }

    const checkAnswer = () => {
        console.log(userAnswer, correctAnswerRef);
        if (userAnswer == correctAnswerRef.current) {
            let button = document.querySelector(".submit-button-quiz");
            button.textContent = "Correct";
            setTimeout(() => {
                let button = document.querySelector(".submit-button-quiz");
                button.textContent = "Submit";
            }, 2000)
        }
        else {
            let button = document.querySelector(".submit-button-quiz");
            button.textContent = "Incorrect";
            setTimeout(() => {
                let button = document.querySelector(".submit-button-quiz");
                button.textContent = "Submit";
            }, 2000)
        }
    }

    const changeQuestion = (totalQuestions, currentQuestion) => {
        document.querySelector(".question-num-label").textContent = "Question " + (currentQuestion + 1) + " of " + totalQuestions;

    }

    const nextQuestion = () => {
        console.log(quizQuestionsRef)
        if (questionIndexRef.current + 1 < quizQuestionsRef.current.length) {
            questionIndexRef.current += 1;
            changeQuestion(quizQuestionsRef.current.length, questionIndexRef.current)
            document.querySelector(".question-text").textContent = quizQuestionsRef.current[questionIndexRef.current].question;
            for (let i = 0; i < 4; i++) {
                document.querySelector(".option" + (i+1)).textContent = quizQuestionsRef.current[questionIndexRef.current].answers[i];
                correctAnswerRef.current = quizQuestionsRef.current[questionIndexRef.current].correctAnswer;
            }
        }
        else {
            return;
        }
    }

    const prevQuestion = () => {
        if (questionIndexRef.current - 1 > -1) {
            questionIndexRef.current -= 1;
            changeQuestion(quizQuestionsRef.current.length, questionIndexRef.current)
            document.querySelector(".question-text").textContent = quizQuestionsRef.current[questionIndexRef.current].question;
            for (let i = 0; i < 4; i++) {
                document.querySelector(".option" + (i+1)).textContent = quizQuestionsRef.current[questionIndexRef.current].answers[i];
                correctAnswerRef.current = quizQuestionsRef.current[questionIndexRef.current].correctAnswer;
            }
        }
        else {
            return;
        }
    }

    const randomizeArray = (arr, correctAns) => {
        const shuffledArray = [...arr];
        const length = shuffledArray.length;

        for (let i = length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        let newCorAns = -1;
        for (let i = 0; i < shuffledArray.length; i++) {
            if (shuffledArray[i] == arr[correctAns]) {
                newCorAns = i;
            }
        }
        return [shuffledArray, newCorAns];
    }
    
    return <div className="text-book-section">
        <div className="screen-cover" >
            <div className="multiple-choice-question">
                <h2 onClick={() => {closeQuiz()}}>X</h2>
                <div className="top-section-multiplechoice">
                    <h2 className="question-text"> Lorem Ipsum Dolar sit amet</h2>
                    <h2 className="question-num-label"> Question x of x</h2>
                </div>
                <div className="radio-buttons">
                    <div className="radio-button">
                        <input type="radio" id="1-option" name="multiple-choice" onClick={() => {setUserAnswer(0)}}/>
                        <label htmlFor="1-option" className="option1"> option a</label>
                    </div>
                    <div className="radio-button">
                        <input type="radio" id="2-option" name="multiple-choice" onClick={() => {setUserAnswer(1)}}/>
                        <label htmlFor="2-option" className="option2"> option a</label>
                    </div>
                    <div className="radio-button">
                        <input type="radio" id="3-option" name="multiple-choice" onClick={() => {setUserAnswer(2)}}/>
                        <label htmlFor="3-option" className="option3"> option a</label>
                    </div>
                    <div className="radio-button">
                        <input type="radio" id="4-option" name="multiple-choice" onClick={() => {setUserAnswer(3)}}/>
                        <label htmlFor="4-option" className="option4"> option a</label>
                    </div>
                </div>
                <div className="multichoice-buttons">
                    <button onClick={() => {prevQuestion()}}> Go back </button>
                    <button onClick={() => {nextQuestion()}}> Next Question </button>
                    <button onClick={() => {checkAnswer()}} className="submit-button-quiz"> Submit</button>
                </div>
            </div>
        </div>
        <NavBar />
        
        <PDF SRC={currentDoc} pdfNum={currentDocIndex} nextPage={nextPage} prevPage={previousPage} startQuiz={startQuiz}/> 
        <div className="custom-page-selector">
            <label htmlFor="jump-to-page">Jump to page: </label>
            <input type="number" id="jump-to-page"/>
            <button onClick={() => {jumpPage()}}> Jump </button>
        </div>
        
    </div>
}
