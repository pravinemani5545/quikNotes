import React, { useEffect, useState, useRef } from "react";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import "./styles.css";

export default function Pomodoro() {

    const pomoComps = useRef(0)
    const isBreak = useRef(false)
    const [displayMessage, setDisplayMessage] = useState(false)
    const [startTimer, setStartTimer] = useState(false)
    const [seconds, setSeconds] = useState(1500)

    //setSeconds(totalSeconds)
    useEffect(() => {
        let interval = setInterval(() => {
            clearInterval(interval);
            if (startTimer) {
                if (seconds === 0) {
                    if (seconds % 60 == 0 && seconds !== 0) {
                        setSeconds(59);
                    } else {
                        isBreak.current = isBreak.current == false ? true : false
                        console.log(isBreak.current)
                        if (isBreak.current == true) {
                            if (pomoComps.current == 4) {
                                pomoComps.current = 0;
                                console.log(pomoComps.current)
                                alert("longbr")
                                setSeconds(600)
                                setStartTimer(prev => !prev)
                            } else {
                                pomoComps.current = pomoComps.current + 1;
                                console.log(pomoComps.current)
                                alert("shortbr")
                                setSeconds(300)
                                setStartTimer(prev => !prev)
                            }
                        } else {
                            alert("work")
                            setSeconds(1500)
                            setStartTimer(prev => !prev)
                        }

                    }
                } else {
                    setSeconds(seconds - 1);
                    console.log(startTimer)
                }
            }
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    }, [seconds, startTimer])

    function handleClick() {
        setStartTimer(prev => !prev)
    }

    function handlePomoClick() {
        setSeconds(1500)
    }


    function handleShortClick() {
        isBreak.current = true
        setSeconds(300)
        setStartTimer(prev => !prev)
    }

    function handleLongClick() {
        isBreak.current = true
        setSeconds(600)
        setStartTimer(prev => !prev)
    }




    const timerMinutes = Math.floor(seconds / 60);
    const timerSeconds = (seconds % 60) >= 10 ? seconds % 60 : '0' + seconds % 60;

    return (
        <div className="pomo">
            <div className="pomo--container">

                <div>
                    <ul className="pomo--content">
                        <li><button onClick={handlePomoClick}>Pomodoro</button></li>
                        <li><button onClick={handleShortClick}>Short Break</button></li>
                        <li><button onClick={handleLongClick}>Long Break</button></li>
                    </ul>
                    <div className="timer">
                        <h1>{timerMinutes}:{timerSeconds}</h1>
                        <button onClick={handleClick}>
                            Start/Stop Timer
                        </button>
                    </div>
                    {/* <CircularProgressbar
                        value={seconds}
                        text={minutes + ':' + seconds}
                    /> */}

                </div>
            </div>
        </div>
    )
}