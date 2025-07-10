"use client"
import React from "react";
import { Temporal } from "@js-temporal/polyfill";
import Week from "./boxWeek";
import { IDay, IMonth, IWeek } from "@/util/interface/object";


function Month({monthCalendar, currentDayTime, setMode, setWeekCalendar} : {monthCalendar: IMonth, currentDayTime: Temporal.PlainDateTime, setMode: React.Dispatch<React.SetStateAction<string>>, setWeekCalendar: React.Dispatch<React.SetStateAction<IWeek>>}) {
    let styleWeekSize = "max-h-1/6"

    if(monthCalendar.weeks.length < 6){
        styleWeekSize = "max-h-1/5"
    }

    return (
        <div className={`flex-grow flex flex-col h-100`}>
            {monthCalendar.weeks.map((displayedWeek, index) => (
                <div key={index} className={`flex grow border border-slate-700 p-2 ${styleWeekSize}`}
                onClick={() => {
                    setWeekCalendar(displayedWeek)
                    }}>
                    <Week
                    weekCalendar={displayedWeek}
                    currentDayTime={currentDayTime}
                    />
                </div>
            ))}
        </div>
    );
}
export default Month;