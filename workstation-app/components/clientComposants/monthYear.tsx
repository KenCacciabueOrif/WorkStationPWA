"use client"
import { Temporal } from "@js-temporal/polyfill";
import React from "react";

function MonthYear({year, month}: {year: number, month: number}) {

    return (
        <h2 className="text-lg font-semibold">
            {Temporal.PlainDate.from({ year, month, day: 1 }).toLocaleString("en", {
                month: "long",
                year: "numeric",
            })}
        </h2>
    );
}
export default MonthYear;