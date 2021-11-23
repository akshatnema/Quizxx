import question from './components/question'
import {shuffle} from './util'

export enum Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard",
}

export type Question= {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
}

export type Questionlist = Question & {
    answers: string[];
}

export const fetchQuestions = async (amount: number, difficulty: Difficulty) => {
   const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`
   const data = await (await fetch(endpoint)).json();
   return data.map((question : Question) =>({
       ...question,
       answer: shuffle([...question.incorrect_answers,question.correct_answer]) 
   }))
}