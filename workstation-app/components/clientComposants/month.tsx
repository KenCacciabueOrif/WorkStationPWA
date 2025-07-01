"use client"
import React from "react";
import Day from "./day";
import {IDay} from '../../util/interface/day'

function Month({monthCalendar} : {monthCalendar: Array<IDay>}) {

    return (
        <div className="grid grid-cols-7 flex-grow">
            {monthCalendar.map((day, index) => (
                <div key={index} className="border border-slate-700 p-2" >
                    <Day
                        day={day}
                    />
                </div>
            ))}
        </div>
    );
}
export default Month;