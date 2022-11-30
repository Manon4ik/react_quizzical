import React from 'react'
import Answer from "./Answer";
//import {nanoid} from "nanoid"
import {decode} from "html-entities";

export default function Question(props){

	const answerElements = props.answers.map(ans =>
		<Answer
			key={ans}
			value={ans}
			selected={props.selected}
			cardId={props.id}
			handleClick={props.handleClick}
			isActive={props.isActive}
			correct={props.correct_answer}
		/>
	)

	return (
		<div className="quizzes">
			<h3 className="quiz__title">{decode(props.question)}</h3>
			{answerElements}
		</div>
	)
}