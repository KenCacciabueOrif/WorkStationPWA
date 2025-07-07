"use client"
import { Temporal } from "@js-temporal/polyfill";
import React, { useEffect, useState } from "react";
import MonthYear from "./monthYear";
import CalendarMenu from "./calendarMenu";
import WeekNames from "./weekNames";
import Month from "./boxMonth";
import { IDay, IMonth, IWeek } from "@/util/interface/object";

function Calendar() {
    const [currentDayTime] = useState(Temporal.Now.plainDateTimeISO())
    const [month, setMonth] = useState(currentDayTime.month);
    const [year, setYear] = useState(currentDayTime.year);
    const [monthCalendar, setMonthCalendar] = useState({
        value: Temporal.Now.plainDateTimeISO(),
        weeks: new Array<IWeek>
    });

    useEffect(() => {
        const fiveWeeks = 5 * 7;

        const startOfVisualMonth = Temporal.PlainDateTime.from({ year, month, day: 1 });

        const monthLength = startOfVisualMonth.daysInMonth;

        // The day in the week this month started on -1 to fit an array starting at 0
        const dayOfWeekMonthStartedOn = startOfVisualMonth.dayOfWeek - 1;

        let weeksNb;

        let dayTime = currentDayTime

        if (dayOfWeekMonthStartedOn + monthLength > fiveWeeks) {
            weeksNb = 6
        } else {
            weeksNb = 5
        }

        const monthCalendar: IMonth = fillMonthCalendar(weeksNb)

        function fillMonthCalendar(weeksNb: number) {
            const monthCalendar: IMonth = {
                value: dayTime,
                weeks: []
            }

            for (let i = 0; i < weeksNb; i++) {
                monthCalendar.weeks.push(
                    fillWeekCalendar(i)
                )
            }

            return monthCalendar
        }

        function fillWeekCalendar(j: number) {

            const weekCalendar: IWeek = {
                value: dayTime,
                days: []
            }

            for (let i = 0; i < 7; i++) {
                weekCalendar.days.push(
                    fillDayCalendar(startOfVisualMonth.add({
                        days: (i + (j * 7)) - dayOfWeekMonthStartedOn,
                    }))
                )
            }

            return weekCalendar
        }

        function fillDayCalendar(dayDate: Temporal.PlainDateTime) {
            dayTime = dayDate
            const dayCalendar: IDay = {
                value: dayDate,
                hours: []
            }

            for (let i = 0; i < 24; i++) {
                dayTime = dayTime.withPlainTime({
                            hour: i
                        })
                dayCalendar.hours.push(
                    {
                        value: dayTime
                    }
                )
            }

            return dayCalendar
        }


        setMonthCalendar(monthCalendar);
    }, [year, month, currentDayTime]);

    return (
        <div className={`flex-grow flex flex-col h-100`}>
            <div className="flex justify-between">
                <MonthYear
                    month={month}
                    year={year}
                />
                <CalendarMenu
                    month={month}
                    year={year}
                    setMonth={setMonth}
                    setYear={setYear}
                />
            </div>


            <WeekNames />

            <Month
                monthCalendar={monthCalendar}
                currentDayTime={currentDayTime}
            />
        </div>
    );
}
export default Calendar;