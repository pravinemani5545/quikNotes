import React from "react";
import logoPlace from "../img/logoplace.png"
import "./styles.css";
import { Routes, Route, Link } from "react-router-dom"
import Calendar from "./Calendar"
import Kanban from "./Kanban";
import Pomodoro from "./Pomodoro";

export default function Nav() {
    return (
        <>
            <nav className="nav">
                <div className="nav--container">
                    <img src={logoPlace} className="nav--icon" />
                    <div className="nav--content">

                        <ul>
                            <li><Link to="/">Tasks</Link></li>
                            <li><Link to="/Pomodoro">Pomodoro</Link></li>
                            <li><Link to="/About">About</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Routes>
                <Route path="/" element={<div className="container"><Calendar /><Kanban /></div>}></Route>
                <Route path="/About" element={<div>poop</div>}>About</Route>
                <Route path="/Pomodoro" element={<Pomodoro />}>Pomodoro</Route>
            </Routes>
        </>

    )
}