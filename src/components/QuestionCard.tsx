import {FC} from 'react'
import { Wrapper, ButtonWrapper } from './QuestionCard.styles';

type Props = {
    question: string;
    answers: string[];
    callback: any;
    userAnswer: any;
    questionNum: number;
    totalQuestions: number;
}


const QuestionCard: FC<Props> = ({ question, answers, callback, userAnswer, questionNum, totalQuestions}) => {
   
  return (
    <Wrapper>
        <p>
        Question: {questionNum} / {totalQuestions}
        </p>
        <p>{ question }</p>

        <div>
            {answers?.map((answer) => (
                <ButtonWrapper
                    correct = {userAnswer?.correctAnswer === answer}
                    userClicked = { userAnswer?.answer === answer }
                >
                    <button disabled={userAnswer} value={answer} onClick={callback}>
                        <span dangerouslySetInnerHTML={{ __html: answer}} />
                    </button>
                </ButtonWrapper>
            ))}
        </div>
    </Wrapper>
  )
}

export default QuestionCard