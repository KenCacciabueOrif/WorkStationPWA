"use client"
import React from "react";
import { State } from "@/util/interface/state";
import ODay from "./oDay";
import { Month } from "@/util/class/month";
import OWeek from "./oWeek";

function OMonth({ state, month }: { state: State | undefined, month: Month | undefined }) {


    return (
        <>
            {month?.value}
            <div className={`border border-slate-700 flex flex-col`}>

                {month?.weeks.map((week, index) => (
                    <div key={index} className="flex border ">
                        <OWeek
                            state={state}
                            week={week}
                        />
                    </div>
                ))}
            </div>
        </>

    );
}
export default OMonth;