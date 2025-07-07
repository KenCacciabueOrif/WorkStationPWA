"use client"
import React from "react";
import { Temporal } from "@js-temporal/polyfill";
import Day from "./boxDay";
import { IWeek } from "@/util/interface/object";



function Week({ weekCalendar, currentDayTime}: { weekCalendar: IWeek, currentDayTime: Temporal.PlainDateTime}) {


    return (
        <div className={`flex-grow flex max-h-100`}>
            {weekCalendar.days.map((displayedDay, index) => (
                <div key={index} className="flex grow border border-slate-700" >
                    <Day
                        displayedDay={displayedDay}
                        currentDayTime={currentDayTime}
                    />
                </div>
            ))}
        </div>
    );
}
export default Week;