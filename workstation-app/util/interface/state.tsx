import { Temporal } from "@js-temporal/polyfill";
import { Year } from "../class/year";
import { Season } from "../class/season";
import { Month } from "../class/month";
import { Week } from "../class/week";
import { Day } from "../class/day";
import { Hour } from "../class/hour";

export interface State {
        currentDate: Temporal.PlainDateTime,
        currentYearList: Year[] | undefined,
        calendarYear: Year | undefined,
        calendarSeason: Season | undefined,
        calendarMonth: Month | undefined,
        calendarWeek: Week | undefined,
        calendarDay: Day | undefined,
        calendarHour: Hour | undefined
    }