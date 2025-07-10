"use client"
import React, { useEffect, useRef, useState } from "react";
import { Temporal } from "@js-temporal/polyfill";
import { IDay } from "@/util/interface/object";
import Hour from "./boxHour";



function Day({ displayedDay, currentDayTime }: { displayedDay: IDay, currentDayTime: Temporal.PlainDateTime }) {
    let styleDay;


    switch (true) {
        case (displayedDay.value.day === currentDayTime.day && displayedDay.value.month === currentDayTime.month && displayedDay.value.year === currentDayTime.year):
            styleDay = 'bg-violet-950 hover:bg-violet-700 font-light'
            break
        case (displayedDay.value.weekOfYear === currentDayTime.weekOfYear && displayedDay.value.month === currentDayTime.month && displayedDay.value.year === currentDayTime.year):
            styleDay = 'bg-teal-950 hover:bg-teal-800'
            break
        case (displayedDay.value.month === currentDayTime.month && displayedDay.value.year === currentDayTime.year):
            styleDay = 'bg-gray-950 hover:bg-gray-800'
            break
        default:
            styleDay = 'bg-slate-900 hover:bg-slate-600 font-light text-slate-400'
    }


    return (
        <div className={`flex-grow flex-col flex h-1/1 ${styleDay}`}>
            {displayedDay.value.day}
            <div className="flex-grow flex-col flex overflow-auto no-scrollbar">
                {displayedDay.hours.map((hour, index) => (
                    <div key={index} className="flex grow border border-slate-700">
                        <Hour
                            hour={hour}
                            currentDayTime={currentDayTime}
                        />
                    </div>
                ))}

            </div>


        </div>
    );
}
export default Day;