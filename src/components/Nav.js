import React from "react";
import logoPlace from "../img/logoplace.png"
import "./styles.css";
import { Routes, Route, Link } from "react-router-dom"
import Calendar from "./Calendar"
import Kanban from "./Kanban";
import Pomodoro from "./Pomodoro";
import SpotifyPlayer from 'react-spotify-player';

// size may also be a plain string using the presets 'large' or 'compact'
const size = {
    width: 800,
    height: 300,
};
const view = 'list'; // or 'coverart'
const theme = 'black'; // or 'white'
//<Kanban />

export default function Nav() {
    return (
        <>
            <nav className="nav">
                <div className="nav--container">
                    <img src={logoPlace} className="nav--icon" />
                    <div className="nav--content">

                        <ul>
                            <li><Link to="/">Pomodoro</Link></li>
                            {/* <li><Link to="/About">About</Link></li> */}
                        </ul>
                    </div>
                </div>
            </nav>
            <Routes>
                <Route path="/" element={<div className="container"><Pomodoro /><SpotifyPlayer
                    className="spotify"
                    uri="spotify:album:79ONNoS4M9tfIA1mYLBYVX"
                    size={size}
                    view={view}
                    theme={theme}
                /></div>}></Route>
                <Route path="/About" element={<div>poop</div>}>About</Route>
            </Routes>
        </>

    )
}