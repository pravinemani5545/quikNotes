import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

import "./styles.css";

const locales = {
    "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

const events = [

];

export default function Calendarr() {

    const [newEvent, setNewEvent] = React.useState({ title: "", start: "", end: "" });
    const [allEvents, setAllEvents] = React.useState(events);

    function handleAddEvent() {
        setAllEvents([...allEvents, newEvent]);
    }

    return (
        <div className="about">
            <h1 style={{ paddingTop: "15px" }}>Calendar</h1>
            <h2 style={{ paddingTop: "10px" }}>Add Calendar Event</h2>
            <div className="calendar--flex--container">
                <div className="calendar--flex">
                    <p>Title: </p>
                    <input type="text" placeholder="Add Title" value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
                </div>
                <div className="calendar--flex">
                    <p>Starting Date: </p>
                    <DatePicker placeholderText="Start Date" wrapperClassName="datePicker" dateFormat="dd/MM/yyyy" selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} />
                </div>
                <div className="calendar--flex">
                    <p>End Date: </p>
                    <DatePicker placeholderText="End Date" wrapperClassName="datePicker" dateFormat="dd/MM/yyyy" selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} />
                </div>
            </div>
            <button style={{ marginTop: "2px" }} onClick={handleAddEvent}>
                Add Event
            </button>
            <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{ height: 500, margin: "50px" }} />
        </div >
    )
}