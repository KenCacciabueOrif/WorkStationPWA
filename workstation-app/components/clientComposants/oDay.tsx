"use client"
import React from "react";
import OHour from "./oHour";
import { State } from "@/util/interface/state";
import { Day } from "@/util/class/day";

function ODay({ state, day }: { state: State | undefined, day: Day | undefined }) {
    let styleDay = ''
    let styleDayTest = false
    let dayName = ''

    switch (true) {
        case (day?.value === state?.currentDate.day):
            styleDay = 'bg-violet-950 dark:bg-violet-950 hover:bg-violet-700'
            styleDayTest = true
            break
        default:
            styleDay = 'hover:bg-slate-600 font-light text-slate-400'
            break
    }

    switch (true) {
        case (day?.dayOfWeek === 1):
            dayName = 'Monday'
            break
        case (day?.dayOfWeek === 2):
            dayName = 'Thuesday'
            break
        case (day?.dayOfWeek === 3):
            dayName = 'Wednsday'
            break
        case (day?.dayOfWeek === 4):
            dayName = 'Thursday'
            break
        case (day?.dayOfWeek === 5):
            dayName = 'Friday'
            break
        case (day?.dayOfWeek === 6):
            dayName = 'Saturday'
            break
        case (day?.dayOfWeek === 7):
            dayName = 'Sunday'
            break
        default:
            dayName = ''
            break
    }

    return (
        <>

            <div className={`border border-slate-700 flex-grow flex flex-col ${styleDay} max-h-100`}>
                {dayName}: {day?.value}
                <div className="flex flex-col overflow-auto">
                    {day?.hours.map((hour, index) => (
                        <div key={index} className="flex border border-slate-700">
                            <OHour
                                state={state}
                                hour={hour}
                                styleDayTest={styleDayTest}
                            />
                        </div>
                    ))}
                </div>

            </div>
        </>

    );
}
export default ODay;