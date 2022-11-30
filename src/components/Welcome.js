import React from 'react'

export default function Welcome(props){
	return (
		<div className="welcome">
			<h2 className="welcome__title">Quizzical</h2>
			<p>Some description if needed</p>
			<button className="button" onClick={props.clickHandler}>Start quiz</button>
		</div>
	)
}