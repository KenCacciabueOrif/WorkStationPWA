
import { Temporal } from "@js-temporal/polyfill"
import { Year } from "../class/year"
import { Season } from "../class/season"
import { Month } from "../class/month"
import { Week } from "../class/week"
import { Day } from "../class/day"
import { Hour } from "../class/hour"

let globalTime: Temporal.PlainDateTime

export function createYearList() {
    let yearList = []

    let yearNbStart = Temporal.Now.plainDateTimeISO().year - 5
    let yearNbEnd = Temporal.Now.plainDateTimeISO().year + 5

    globalTime = Temporal.PlainDateTime.from({ year: yearNbStart, month: 1, day: 1 })

    const loopEnd = yearNbEnd - yearNbStart

    for (let i = 0; i <= loopEnd; i++) {

        let yearObject = new Year(globalTime.year, createSeasonList())
        yearList.push(yearObject)
    }
    console.log(yearList)
    return yearList
}

export function createSeasonList() {
    let seasonList = []
    let seasonValue = 0
    for (let i = 1; i <= 4; i++) {

        switch (true) {
            case globalTime.month > 2 && globalTime.month < 6:
                seasonValue = 1
                break
            case globalTime.month > 5 && globalTime.month < 9:
                seasonValue = 2
                break
            case globalTime.month > 8 && globalTime.month < 12:
                seasonValue = 3
                break
            case globalTime.month > 11 || globalTime.month < 3:
                seasonValue = 4
                break
        }

        let seasonObject = new Season(seasonValue, createMonthList())

        seasonList.push(seasonObject)

    }

    return seasonList
}

export function createMonthList() {
    let monthList = []

    for (let i = 1; i <= 3; i++) {



        let monthObject = new Month(globalTime.month, createWeekList(globalTime.month))

        monthList.push(monthObject)

    }

    return monthList
}

export function createWeekList(month: number) {
    let weekList = []

    while (month === globalTime.month) {
        let weekObject = new Week(globalTime.weekOfYear || 0, createDayList(globalTime.weekOfYear || 0))
        weekList.push(weekObject)
    }

    return weekList
}

export function createDayList(week: number) {
    let dayList = []

    while (week === globalTime.weekOfYear) {
        let dayObject = new Day(globalTime.day, createHourList(), globalTime.dayOfWeek)

        dayList.push(dayObject)

        globalTime = globalTime.add({ days: 1 })
    }

    return dayList
}

export function createHourList() {
    let hourList = []

    for (let i = 0; i <= 23; i++) {

        let hourObject = new Hour(i, [])

        hourList.push(hourObject)
    }

    return hourList
}

export function findYear(yearList: Array<Year> | undefined, yearNb: number) {

    if (!yearList) {
        return undefined
    }

    for (let year in yearList) {
        if (yearList[year].value === yearNb) {
            return yearList[year]
        }
    }
}

export function findSeason(seasonList: Array<Season> | undefined, monthNb: number) {
    let seasonValue = 0

    if (!seasonList) {
        return undefined
    }

    switch (true) {
        case monthNb > 2 && monthNb < 6:
            seasonValue = 1
            break
        case monthNb > 5 && monthNb < 9:
            seasonValue = 2
            break
        case monthNb > 8 && monthNb < 12:
            seasonValue = 3
            break
        case monthNb > 11 || monthNb < 3:
            seasonValue = 4
            break
    }
    for (let season in seasonList) {
        if (seasonList[season].value === seasonValue) {
            return seasonList[season]
        }
    }
}

export function findMonth(monthList: Array<Month> | undefined, monthNb: number) {

    if (!monthList) {
        return undefined
    }


    for (let month in monthList) {

        if (monthList[month].value === monthNb) {

            return monthList[month]
        }
    }
}

export function findWeek(weekList: Array<Week> | undefined, weekNb: number) {
    let weekValue = 0

    if (!weekList) {
        return undefined
    }

    if (weekNb <= 7) {
        weekValue = 1
    }

    for (let week in weekList) {
        if (weekList[week].value === weekNb) {
            return weekList[week]
        }
    }
}

export function findDay(dayList: Array<Day> | undefined, dayNb: number) {

    if (!dayList) {
        return undefined
    }

    for (let day in dayList) {
        if (dayList[day].value === dayNb) {
            return dayList[day]
        }
    }
}

export function findHour(hourList: Array<Hour> | undefined, hourNb: number) {

    if (!hourList) {
        return undefined
    }

    for (let hour in hourList) {
        if (hourList[hour].value === hourNb) {
            return hourList[hour]
        }
    }
}