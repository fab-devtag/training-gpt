'use client';
import { useState } from 'react';
import QuestionCard from './QuestionCard';
import { questions } from './questions';

export default function Home() {
	const [questionNumber, setQuestionNumber] = useState<number>(0);
	const [responses, setResponses] = useState<string[]>([]);
	const [quizzIsFinish, setQuizzIsFinish] = useState<boolean>(false);

	const saveAnswer = (response: string) => {
		const updatedArray = [...responses, response];
		setResponses(updatedArray);

		if (questionNumber < questions.length - 1) {
			setQuestionNumber((prev) => prev + 1);
		} else {
			setQuizzIsFinish(true);
		}
	};

	const results = () => {
		return questions.map((question, index) => ({
			...question,
			userAnswer: responses[index],
			correct: responses[index] === question.correctAnswer,
		}));
	};

	const replay = () => {
		setQuestionNumber(0);
		setQuizzIsFinish(false);
		setResponses([]);
	};

	const finalResult = results();
	return (
		<div>
			<h1>App Quiz - React / Typescript</h1>
			{quizzIsFinish ? (
				<div>
					<p>
						Résultats : {finalResult.filter((result) => result.correct).length}{' '}
						bonnes réponses sur {questions.length}
					</p>
					<div>
						{finalResult.map((result, index) => (
							<div key={result.id}>
								<p>{result.text}</p>
								<p>La bonne réponse : {result.correctAnswer} </p>
								<p>
									Ta réponse : {result.userAnswer}{' '}
									{result.correct ? '✅' : '❌'}
								</p>
							</div>
						))}
					</div>
				</div>
			) : (
				<QuestionCard
					question={questions[questionNumber]}
					questionNumber={questionNumber}
					onSaveAnswer={saveAnswer}
				/>
			)}
			<button onClick={replay}>Rejouer</button>
		</div>
	);
}
