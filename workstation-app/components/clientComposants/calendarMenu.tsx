"use client"
import { Temporal } from "@js-temporal/polyfill";
import React from "react";

function CalendarMenu({ month, year, setMonth, setYear }: { month: number, year: number, setMonth: React.Dispatch<React.SetStateAction<number>>, setYear: React.Dispatch<React.SetStateAction<number>> }) {

    const next = () => {
        const { month: nextMonth, year: nextYear } = Temporal.PlainYearMonth.from({
            month,
            year,
        }).add({ months: 1 });
        setMonth(nextMonth);
        setYear(nextYear);
    };

    const previous = () => {
        const { month: prevMonth, year: prevYear } = Temporal.PlainYearMonth.from({
            month,
            year,
        }).subtract({ months: 1 });
        setMonth(prevMonth);
        setYear(prevYear);
    };

    return (
        <div className="flex justify-center mb-4">
            <button className="btn btn-blue w-[120px] me-2" onClick={previous}>
                &lt; Previous
            </button>
            <button className="btn btn-blue w-[120px]" onClick={next}>
                Next &gt;
            </button>
        </div>
    );
}
export default CalendarMenu;