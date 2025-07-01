"use client"
import { Temporal } from "@js-temporal/polyfill";
import React, { useEffect, useState } from "react";
import WeekNames from "./weekNames";
import Month from "./month"
import MonthYear from "./monthYear";
import CalendarMenu from "./calendarMenu";

function Calendar() {
    const [month, setMonth] = useState(Temporal.Now.plainDateISO().month);
    const [year, setYear] = useState(Temporal.Now.plainDateISO().year);
    const [monthCalendar, setMonthCalendar] = useState<{ date: Temporal.PlainDate; isInMonth: boolean }[]>([]);

    useEffect(() => {
        const fiveWeeks = 5 * 7;
        const sixWeeks = 6 * 7;
        const startOfMonth = Temporal.PlainDate.from({ year, month, day: 1 });
        const monthLength = startOfMonth.daysInMonth;
        const dayOfWeekMonthStartedOn = startOfMonth.dayOfWeek - 1;
        // Calculate the overall length including days from the previous and next months to be shown
        const length =
            dayOfWeekMonthStartedOn + monthLength > fiveWeeks ? sixWeeks : fiveWeeks;

        // Create blank array
        const calendar = new Array(length)
            .fill({})
            // Populate each day in the array
            .map((_, index) => {
                const date = startOfMonth.add({
                    days: index - dayOfWeekMonthStartedOn,
                });
                return {
                    isInMonth: !(
                        index < dayOfWeekMonthStartedOn ||
                        index - dayOfWeekMonthStartedOn >= monthLength
                    ),
                    date,
                };
            });

        setMonthCalendar(calendar);
    }, [year, month]);



    return (
        <div className="flex-grow flex flex-col max-h-screen">
            <MonthYear
            month={month}
            year={year}
            />
            <WeekNames/>
            <Month
                monthCalendar={monthCalendar}
            />
            <CalendarMenu
            month={month}
            year={year}
            setMonth={setMonth}
            setYear={setYear}
            />
        </div>
    );
}
export default Calendar;