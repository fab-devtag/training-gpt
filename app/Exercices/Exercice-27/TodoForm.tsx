import { useRef, useState } from 'react';
import { Priority, Todo } from './types';

interface Props {
	onAddTask: (taskTitle: string, taskPriority: Priority) => void;
}

const TodoForm = ({ onAddTask }: Props) => {
	const [taskTitle, setTaskTitle] = useState<string>('');
	const [taskPriority, setTaskPriority] = useState<Priority>('Moyenne');

	const inputRef = useRef<HTMLInputElement>(null);

	const handleAddTask = () => {
		onAddTask(taskTitle, taskPriority);
		setTaskTitle('');
		setTaskPriority(taskPriority);
		inputRef.current?.focus();
	};

	return (
		<div className="flex gap-2">
			<input
				ref={inputRef}
				className="bg-white text-black"
				type="text"
				value={taskTitle}
				onChange={(e) => setTaskTitle(e.target.value)}
			/>
			<select
				value={taskPriority}
				name="priority"
				className="bg-white text-black "
				onChange={(e) => {
					setTaskPriority(e.target.value as Priority);
				}}
			>
				<option value="Haute">Haute</option>
				<option value="Moyenne">Moyenne</option>
				<option value="Faible">Faible</option>
			</select>
			<button
				disabled={!taskTitle}
				className="bg-green-500 text-green-950 p-2 disabled:bg-gray-500"
				onClick={handleAddTask}
			>
				Ajouter
			</button>
		</div>
	);
};

export default TodoForm;
