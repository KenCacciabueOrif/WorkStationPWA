"use client"
import React from "react";
import { State } from "@/util/interface/state";
import { Week } from "@/util/class/week";
import ODay from "./oDay";

function OWeek({ state, week }: { state: State | undefined, week: Week | undefined }) {


    return (

        <div className={`border border-slate-700 flex-grow overflow-auto flex `}>

            {week?.days.map((day, index) => (
                <div key={index} className="flex flex-grow border border-slate-700">
                    <ODay
                        state={state}
                        day={day}
                    />
                </div>
            ))}
        </div>


    );
}
export default OWeek;