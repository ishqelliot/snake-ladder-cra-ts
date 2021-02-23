import React, { useState } from 'react';

function Questions({ ...props }: any) {
    const questions = [
		{
			questionText: 'Are you a person with disability?',
			answerOptions: [
				{ answerText: 'Yes', isCorrect: false },
				{ answerText: 'No', isCorrect: false }
			],
		},
		{
			questionText: 'What is you form of disability?',
			answerOptions: [
				{ answerText: 'Visual Impairment', isCorrect: false },
				{ answerText: 'Color Blindness', isCorrect: true },
				{ answerText: 'Dyslexia', isCorrect: false },
				{ answerText: 'Others', isCorrect: false },
			],
		},
		{
			questionText: 'What is the severity of your disability?',
			answerOptions: [
				{ answerText: '20-30%', isCorrect: false },
				{ answerText: '30-50%', isCorrect: false },
				{ answerText: '50-70%', isCorrect: false },
				{ answerText: '70-100%', isCorrect: false },
			],
		},
		{
			questionText: 'Would you like to enable our Accessibility settings?',
			answerOptions: [
				{ answerText: 'Yes', isCorrect: false },
				{ answerText: 'No', isCorrect: false },
			],
		},
	];
	const [currentQuestion, setCurrentQuestion] = useState(0);

	const handleAnswerOptionClick = (isCorrect: boolean) => {

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			//TODO: route to home page
		}
	};
	return (
		<div className="app">
			<div className='question-section'>
				<div className='question-count'>
				<span>Question {currentQuestion + 1}</span>/{questions.length}
				</div>
				<div className='question-text'>{questions[currentQuestion].questionText}</div>
			</div>
			<ul className='answer-section'>
				{questions[currentQuestion].answerOptions.map((answerOption) => (
					<li onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</li>
				))}
			</ul>
		</div>
	);
}

export default Questions;