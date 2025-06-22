import { useEffect, useState } from 'react';
import { Question } from './types';

interface Props {
	question: Question;
	questionNumber: number;
	onSaveAnswer: (answer: string) => void;
}
const QuestionCard = ({ question, questionNumber, onSaveAnswer }: Props) => {
	const [timer, setTimer] = useState(5);

	useEffect(() => {
		setTimer(5);
		const intervalId = setInterval(() => {
			setTimer((prev) => prev - 1);
		}, 1000);

		return () => {
			clearInterval(intervalId);
		};
	}, [questionNumber]);

	useEffect(() => {
		if (timer === 0) {
			onSaveAnswer('');
		}
	}, [timer, onSaveAnswer]);

	return (
		<div>
			<h1>
				Question n°{questionNumber + 1} {timer}
			</h1>
			<div>
				{question.options.map((option, index) => (
					<p
						onClick={() => onSaveAnswer(option)}
						key={`${question.id}${index}`}
					>
						{option}
					</p>
				))}
			</div>
		</div>
	);
};

export default QuestionCard;
