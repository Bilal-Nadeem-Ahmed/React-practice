import React, {useState} from "react"; 


import "./App.css"


export default function App() {
  const questions = [
		{
			questionText: 'What is my name?',
			answerOptions: [
				{ answerText: 'Abdallah', isCorrect: false },
				{ answerText: 'Mohammed', isCorrect: false },
				{ answerText: 'Ali', isCorrect: true },
				{ answerText: 'John', isCorrect: false },
			],
		},
		{
			questionText: 'Where do i live?',
			answerOptions: [
				{ answerText: 'Belarus', isCorrect: false },
				{ answerText: 'Tokyo', isCorrect: true },
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'Nottingham', isCorrect: false },
			],
		},
		{
			questionText: 'How did you came to know?',
			answerOptions: [
				{ answerText: 'Abu Muhammed said', isCorrect: true },
				{ answerText: 'Elmi did the tutsy roll', isCorrect: false },
				{ answerText: 'Wiki answers', isCorrect: false },
				{ answerText: 'I heard her say', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
  ];

 
  
  const[currentQuestion, setCurrentQuestion] = useState(0);
  // used to display the score pannel at the end
  const [showScore, setShowScore]= useState(false)

  const [score, setScore] = useState(0)
  //  change the question and if someone reaches end of quiz, show the score pannel
  const handleButtonClick =  (isCorrect) => {
    // adds up the correct answers
    if(isCorrect===true){
      
      setScore(score+1)
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion<questions.length){
      setCurrentQuestion(nextQuestion) ;
    } else {
      setShowScore(true)
    }
    
  }
	return (
		<div className='app'>
			
			{showScore ? (
				<div className='score-section'>
          <p>Congratulations!</p>
          <br></br>
          <p>You scored {score} out of {questions.length}</p></div>
			) : (
				<>
					<div className='question-section'>

            <div className='question-text'><h1>{questions[currentQuestion].questionText}</h1></div>

						<div className='question-count'>
      <h2>Question {currentQuestion + 1} /{questions.length}</h2>
						</div>
      
					</div>
					<div className='answer-section'>
            {questions[currentQuestion].answerOptions.map((answerOption)=><button onClick = {()=>handleButtonClick(answerOption.isCorrect)}>{answerOption.answerText}</button>)}
					</div>
				</>
			)}
		</div>
	);


};
