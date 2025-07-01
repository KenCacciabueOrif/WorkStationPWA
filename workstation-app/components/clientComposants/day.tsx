"use client"
import React from "react";
import {IDay} from "../../util/interface/day";

function Day({ day }: { day: IDay }) {
    

    return (
        <div
            className={`border border-slate-700 p-2 h-full ${day.isInMonth
                ? "bg-black hover:bg-gray-800"
                : "bg-slate-900 hover:bg-slate-600 font-light text-slate-400"
                }`}
        >
            {day.date.day}
        </div>
    );
}
export default Day;