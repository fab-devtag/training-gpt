import { Question } from './types';

export const questions: Question[] = [
	{
		id: 1,
		text: 'Quelle est la capitale de la France ?',
		options: ['Paris', 'Lyon', 'Marseille', 'Nice'],
		correctAnswer: 'Paris',
	},
	{
		id: 2,
		text: 'Combien y a-t-il de continents sur Terre ?',
		options: ['5', '6', '7', '8'],
		correctAnswer: '7',
	},
	{
		id: 3,
		text: 'Quelle planète est la plus proche du Soleil ?',
		options: ['Vénus', 'Mercure', 'Mars', 'Terre'],
		correctAnswer: 'Mercure',
	},
	{
		id: 4,
		text: "Qui a écrit 'Les Misérables' ?",
		options: ['Victor Hugo', 'Emile Zola', 'Molière', 'Balzac'],
		correctAnswer: 'Victor Hugo',
	},
	{
		id: 5,
		text: "Quelle est la formule chimique de l'eau ?",
		options: ['H2O', 'CO2', 'O2', 'NaCl'],
		correctAnswer: 'H2O',
	},
];
