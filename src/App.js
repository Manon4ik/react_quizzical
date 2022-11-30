import React from "react"
import './App.css';
//import {nanoid} from "nanoid"
import Welcome from './components/Welcome'
import Question from './components/Question'


function App() {

	const [startGame, setStartGame] = React.useState(false)
	const [quizActive, setQuizActive] = React.useState(false)
	const [allQuizData, setAllQuizData] = React.useState({})
	const [quizCards, setQuizCards] = React.useState([])


	function letsPlay() {
		setStartGame( true )
		setQuizCards([])
		setQuizActive( true )
	}


	// Get data from API

	React.useEffect(() => {
		if (quizActive === true) {
		console.log('get API')
			fetch("https://opentdb.com/api.php?amount=5&type=multiple&difficulty=easy")
				.then(res => res.json())
				.then(data => setAllQuizData(data))
		}
	}, [quizActive])

	//console.log(typeof(allQuizData))


	// Build Questions

	React.useEffect(() => {
		if(allQuizData.results){
			console.log('Build Questions')
			const quizArray = allQuizData.results
			const newCards = quizArray.map((item, i) => ({
				question: item.question,
				correct_answer: item.correct_answer,
				answers: [...item.incorrect_answers, item.correct_answer]
					.sort(function(a, b){return 0.5 - Math.random()}),
				selected: "",
				id: i+1,
				isCorrect: ""
			}))
			setQuizCards(newCards)
			//setIsLoading(false)
		}
	},[allQuizData])

	//console.log(quizCards)


	const quizCardElements = quizCards.map(card =>
		<Question
			key={card.id}
			{...card}

			//handleClick={handleClick}
			isActive={quizActive}
		/>
	)


	return (
		<div className="App">
			<img className="App__img-1" src="./images/blobs-y.png" alt="#"/>
			<img className="App__img-2" src="./images//blobs-b.png" alt="#"/>
			{!startGame ? <Welcome clickHandler={letsPlay}/> : quizCardElements}
		</div>
	);
}

export default App;
