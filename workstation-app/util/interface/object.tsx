import { Temporal } from "@js-temporal/polyfill"

export interface IHour {
    value: Temporal.PlainDateTime
}

export interface IDay {
    value: Temporal.PlainDateTime
    hours: Array<IHour>
}

export interface IWeek {
    value: Temporal.PlainDateTime
    days: Array<IDay>
}

export interface IMonth {
    value: Temporal.PlainDateTime
    weeks: Array<IWeek>
}