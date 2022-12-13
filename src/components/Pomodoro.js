import React, { useEffect, useState } from "react";
import "./styles.css";

export default function Pomodoro() {

    const [minutes, setMinutes] = useState(1)
    const [seconds, setSeconds] = useState(0)
    const [displayMessage, setDisplayMessage] = useState(false)
    const [startTimer, setStartTimer] = useState(false)

    useEffect(() => {
        let interval = setInterval(() => {
            clearInterval(interval);
            if (startTimer) {
                if (seconds === 0) {
                    if (minutes !== 0) {
                        setSeconds(59);
                        setMinutes(minutes - 1);
                    } else {
                        let minutes = displayMessage ? 24 : 4;
                        let seconds = 59;

                        setSeconds(seconds);
                        setMinutes(minutes);
                        setDisplayMessage(!displayMessage);
                    }
                } else {
                    setSeconds(seconds - 1);
                    console.log(startTimer)
                }
            }
        }, 1000);
    }, [seconds, startTimer])

    function handleClick() {
        setStartTimer(prev => !prev)
    }

    const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

    return (
        <div className="pomo">
            <div className="pomo--container">
                <div>
                    <ul className="pomo--content">
                        <li>Pomodoro</li>
                        <li>Short Break</li>
                        <li>Long Break</li>
                    </ul>
                    <div className="timer">
                        <h1>{timerMinutes}:{timerSeconds}</h1>
                        <button onClick={handleClick}>
                            Start/Stop Timer
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}