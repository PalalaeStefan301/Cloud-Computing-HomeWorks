import React, { useState } from 'react';
import classes from './index.css';
import Header from '../homepage/Header';
import {StickyContainer, Sticky } from 'react-sticky'
import Container from '@material-ui/core/Container';

const sections = [
    { title: 'Subscribe', url: '#' },
    { title: 'Quizzes', url: '/quizzes' },
    { title: 'Contact us', url: '#' },
    { title: 'About', url: '/about' },
  ];

export default function App() {
	const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	];
    
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
        <React.Fragment>
        <Container maxWidth="lg">
        <StickyContainer style={{ overflowY: 'auto' }}>
          <Sticky>
          {({
            sticky_style,
            isSticky,
            wasSticky,
            distanceFromTop,
            distanceFromBottom,
            calculatedHeight
          }) => (
            <Header title="Home" sections={sections} style={sticky_style} />
          )}
          </Sticky>
        </StickyContainer>
		<div className={classes.my_app}>
			{showScore ? (
				<div className={classes.score_section}>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className={classes.question_section}>
						<div className={classes.question_count}>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className={classes.question_text}>{questions[currentQuestion].questionText}</div>
					</div>
					<div className={classes.answer_section}>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button class="button button1" onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
        </Container>
        </React.Fragment>
	);
}
