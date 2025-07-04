import { EventHandler, useEffect, useRef, useState } from 'react';
import { Priority, Todo } from './types';

interface Props {
	todo: Todo;
	onToggleTask: (todoId: number) => void;
	onDeleteTask: (todoId: number) => void;
	onEditTask: (todoId: number, title: string) => void;
}

const TodoItem = ({ todo, onToggleTask, onDeleteTask, onEditTask }: Props) => {
	const [isEditing, setIsEditing] = useState(false);
	const [currentTitle, setCurrentTitle] = useState(todo.title);

	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (isEditing) {
			const input = inputRef.current;
			input?.focus();
		}
	}, [isEditing]);

	const handleEdit = (todoId: number) => {
		onEditTask(todoId, currentTitle);
		setIsEditing(false);
	};

	return isEditing ? (
		<div className="flex gap-2 items-center">
			<input
				ref={inputRef}
				className="bg-white text-black "
				type="text"
				value={currentTitle}
				onChange={(e) => setCurrentTitle(e.target.value)}
				onKeyUp={(e) => {
					if (e.key === 'Enter') handleEdit(todo.id);
					if (e.key === 'Escape') setIsEditing(false);
				}}
			/>
			<button
				className="bg-green-500 p-1 text-green-950 disabled:bg-gray-500"
				onClick={() => handleEdit(todo.id)}
				disabled={!currentTitle}
			>
				Valider ✔️
			</button>
			<button
				className="bg-red-500 text-red-950 p-1"
				onClick={() => setIsEditing(false)}
			>
				Annuler ❌
			</button>
		</div>
	) : (
		<div className="flex gap-2 items-center">
			<div>
				<div className="flex gap-2">
					<p>{todo.title}</p>
					<Badge priority={todo.priority} />
				</div>
				<p>
					{todo.createdAt && !isNaN(new Date(todo.createdAt).getTime()) ? (
						<>
							Ajouté le : {new Date(todo.createdAt).toLocaleDateString('fr-FR')}{' '}
							à {new Date(todo.createdAt).toLocaleTimeString('fr-FR')}
						</>
					) : (
						'Date inconnue'
					)}
				</p>
			</div>
			<button onClick={() => onToggleTask(todo.id)}>
				{todo.done ? '✅' : '❌'}
			</button>
			<button
				className="bg-red-500 text-red-950 p-1"
				onClick={() => onDeleteTask(todo.id)}
			>
				Supprimer
			</button>
			<button
				onClick={() => {
					setCurrentTitle(todo.title);
					setIsEditing(true);
				}}
				className="bg-yellow-500 text-yellow-950 p-1"
			>
				Modifier ✏️
			</button>
		</div>
	);
};

export default TodoItem;

const Badge = ({ priority }: { priority: Priority }) => {
	const badgeColor = () => {
		if (priority === 'Faible') return 'bg-green-500';
		else if (priority === 'Moyenne') return 'bg-orange-500';

		return 'bg-red-500';
	};
	return (
		<span className={`p-1 rounded-full text-black ${badgeColor()}`}>
			{priority}
		</span>
	);
};
