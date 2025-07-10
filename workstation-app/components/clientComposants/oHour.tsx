"use client"
import React from "react";
import { State } from "@/util/interface/state";
import { Hour } from "@/util/class/hour";

function OHour({ state, hour, styleDayTest }: { state: State | undefined, hour: Hour | undefined, styleDayTest: boolean }) {
    let styleHour = ''

    switch (true) {
        case (hour?.value === state?.currentDate.hour && styleDayTest):
            styleHour = 'bg-purple-950 dark:bg-purple-950 hover:bg-purple-700 font-light'
            break
        default:
            styleHour = 'hover:bg-slate-600 font-light text-slate-400'
            break
    }

    return (
        <div className={`flex-grow flex ${styleHour} max-h-100`}>
            {hour?.value}
        </div>
    );
}
export default OHour;