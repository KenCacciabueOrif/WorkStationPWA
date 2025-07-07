"use client"
import React from "react";
import { Temporal } from "@js-temporal/polyfill";
import Week from "./boxWeek";
import { IMonth } from "@/util/interface/object";


function Month({monthCalendar, currentDayTime} : {monthCalendar: IMonth, currentDayTime: Temporal.PlainDateTime}) {

    return (
        <div className={`flex-grow flex flex-col h-100`}>
            {monthCalendar.weeks.map((displayedWeek, index) => (
                <div key={index} className="flex grow border border-slate-700 p-2 max-h-1/6" >
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