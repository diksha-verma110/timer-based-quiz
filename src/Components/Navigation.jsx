export default function Navigation(props) {
    return (
        <div>
            <button 
                onClick={props.onBack} 
                disabled={props.isFirst}   
            >
                Back
            </button>

            <button onClick={props.onSubmit}>
                Submit
            </button>

            <button 
                onClick={props.onNext} 
                disabled={props.isLast}    
            >
                Next
            </button>
        </div>
    );
}
