"use client"
import React, { useEffect } from "react";
import { Temporal } from "@js-temporal/polyfill";
import { IHour } from "@/util/interface/object";



function Hour({ hour, currentDayTime }: { hour: IHour, currentDayTime: Temporal.PlainDateTime }) {

    let styleHour = ''
    const dId = hour.value.toString();
    switch (true) {
        case hour.value.hour === currentDayTime.hour && hour.value.day === currentDayTime.day && hour.value.month === currentDayTime.month && hour.value.year === currentDayTime.year:
            styleHour = 'bg-rose-950 hover:bg-rose-700 font-light'

            break
    }

    useEffect(() => {
        if(hour.value.hour === currentDayTime.hour && hour.value.day === currentDayTime.day && hour.value.month === currentDayTime.month && hour.value.year === currentDayTime.year){
            const doc = document.getElementById(dId)
            doc?.scrollIntoView()
        }
    })

    return (
        <div className={`flex-grow flex ${styleHour}`} id={dId}>
            <div className="flex grow border border-slate-700 p-2">
                {hour.value.hour}
            </div>
        </div>
    );
}
export default Hour;