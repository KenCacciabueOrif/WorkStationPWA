"use client"

import React from "react";
import Calendar from "./boxCalendar";

function TheBox() {

    return (
        <div className={`flex-grow flex flex-col h-100`}>
            <Calendar/>
        </div>
    );
}
export default TheBox;