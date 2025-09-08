export default function QuizQuestion(props) {
    return (
        <div className="quiz">
            <h2>{props.questionText}</h2>
            <div className="options">
                {props.options.map((option, index) => (
                    <button
                        key={index}
                        onClick={() => props.onSelectOption(option)} // just store selection
                        style={{
                            backgroundColor:
                                props.selectedOption === option ? "lightblue" : ""
                        }}
                    >
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
}
