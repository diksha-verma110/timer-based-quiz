export default function Result(props) {
    return (
        <div>
            <h2>Quiz Finished!</h2>
            <p>Score: {props.score}</p>
            <p>Total Time: {props.totalTime}</p>
        </div>
    );
}
