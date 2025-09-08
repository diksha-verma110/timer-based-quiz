import { useState, useEffect } from "react";

export default function Timer(props) {
    const [timeLeft, setTimeLeft] = useState(30); 

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(prev => prev - 1);
        }, 1000);

        if (timeLeft === 0) {
            clearInterval(interval);
            props.onTimeUp(); 
        }

        return () => clearInterval(interval);
    }, [timeLeft]);

    return (
        <div>
            <p>Time Left: {timeLeft}sec</p>
        </div>
    );
}
