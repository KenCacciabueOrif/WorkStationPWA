"use client"
import React, { useEffect, useState } from "react";
import { Temporal } from "@js-temporal/polyfill";
import { Year } from "@/util/class/year";
import { Season } from "@/util/class/season";
import { Month } from "@/util/class/month";
import { Week } from "@/util/class/week";
import { Day } from "@/util/class/day";
import { Hour } from "@/util/class/hour";
import { createYearList, findDay, findHour, findMonth, findSeason, findWeek, findYear } from "@/util/function/oCalendar";
import OHour from "./oHour";

function Calendar() {

    interface State {
        currentDate: Temporal.PlainDateTime,
        currentYearList: Year[] | undefined,
        calendarYear: Year | undefined,
        calendarSeason: Season | undefined,
        calendarMonth: Month | undefined,
        calendarWeek: Week | undefined,
        calendarDay: Day | undefined,
        calendarHour: Hour | undefined
    }

    const [state, setState] = useState<State>()

    useEffect(() => {

        const yearList = createYearList()

        const currentYear = findYear(yearList, Temporal.Now.plainDateTimeISO().year)

        const currentSeason = findSeason(currentYear?.seasons, Temporal.Now.plainDateTimeISO().month)

        const currentMonth = findMonth(currentSeason?.months, Temporal.Now.plainDateTimeISO().month)
        console.log(currentSeason)
        const currentWeek = findWeek(currentMonth?.weeks, Temporal.Now.plainDateTimeISO().weekOfYear || 0)

        const currentDay = findDay(currentWeek?.days, Temporal.Now.plainDateTimeISO().day)

        const currentHour = findHour(currentDay?.hours, Temporal.Now.plainDateTimeISO().hour)

        setState({
            ...state,
            currentDate: Temporal.Now.plainDateTimeISO(),
            currentYearList: yearList,
            calendarYear: currentYear,
            calendarSeason: currentSeason,
            calendarMonth: currentMonth,
            calendarWeek: currentWeek,
            calendarDay: currentDay,
            calendarHour: currentHour
        })


    }, [])

    return (
        <div className={`border flex-grow flex flex-col h-100`}>
            <div>{state?.calendarYear?.value}: {state?.calendarSeason?.value}: {state?.calendarMonth?.value}: {state?.calendarWeek?.value}: {state?.calendarDay?.value}</div>
            <OHour
            hour={state?.calendarHour}
            />
        </div>
    );
}
export default Calendar;