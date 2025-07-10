"use client"

import React from "react";
//import Calendar from "./boxCalendar";
import Calendar from "./oCalendar";

function TheBox() {

    return (
        <div className={`flex-grow flex flex-col`}>
            <Calendar/>
        </div>
    );
}
export default TheBox;