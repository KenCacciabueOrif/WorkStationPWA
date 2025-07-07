import { Temporal } from "@js-temporal/polyfill";

export interface IDay {
    date: Temporal.PlainDate;
    isInMonth: Boolean;
    isToday: Boolean;
}