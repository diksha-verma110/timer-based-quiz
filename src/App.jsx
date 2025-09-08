import Timers from "./Components/Timers.jsx";
import QuizQuestion from "./Components/QuizQuestion.jsx";
import Result from "./Components/Results.jsx";
import Navigation from "./Components/Navigation.jsx";
import Score from "./Components/Score.jsx";
import { useState } from "react";

function App() {
    const [score, setScore] = useState(0);               // Track correct answers
    const [currentIndex, setCurrentIndex] = useState(0); // Track current question
    const [selectedOption, setSelectedOption] = useState(""); // Store clicked option
    const [showResult, setShowResult] = useState(false); // Show result page
    const [totalTime, setTotalTime] = useState(0);       // Track total time spent

    const questions = [
        {
            questionText: "What is the colour of water?",
            options: ["colourless", "blue", "white", "pink"],
            correctAnswer: "colourless"
        },
        {
            questionText: "What is the capital of India?",
            options: ["Assam", "New Delhi", "West Bengal", "Maharashtra"],
            correctAnswer: "New Delhi"
        },
        {
            questionText: "What is the colour of elephant?",
            options: ["orange", "green", "white", "grey"],
            correctAnswer: "grey"
        },
        {
            questionText: "Which of the following is a star?",
            options: ["sun", "moon", "jupiter", "you"],
            correctAnswer: "sun"
        },
    ];

    // 👉 Function for Submit button
    const handleSubmit = () => {
        
        if (selectedOption === questions[currentIndex].correctAnswer) {
            setScore(prev => prev + 1);
        }

        if (currentIndex === questions.length - 1) {
            setShowResult(true);
        } else {
            setCurrentIndex(prev => prev + 1);
            setSelectedOption("");
        }
    };

    const handleBack = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
            setSelectedOption("");
        }
    };
    const handleTimeUp = (timeSpent) => {
        setTotalTime(prev => prev + timeSpent);
        handleSubmit(); 
    };
    if (showResult) {
        return <Result score={score} total={questions.length} totalTime={totalTime} />;
    }

    return (
        <div>
            <Timers 
                key={currentIndex}  
                onTimeUp={handleTimeUp} 
            />

            <QuizQuestion
                questionText={questions[currentIndex].questionText}
                options={questions[currentIndex].options}
                onSelectOption={setSelectedOption}
                selectedOption={selectedOption}
            />

            <Navigation
                onBack={handleBack}
                onSubmit={handleSubmit}
                onNext={() => setCurrentIndex(prev => prev + 1)}
                isFirst={currentIndex === 0}
                isLast={currentIndex === questions.length - 1}
            />

            <Score score={score} />
        </div>
    );
}

export default App;

