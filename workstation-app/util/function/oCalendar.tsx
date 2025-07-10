
import { Temporal } from "@js-temporal/polyfill"
import { Year } from "../class/year"
import { Season } from "../class/season"
import { Month } from "../class/month"
import { Week } from "../class/week"
import { Day } from "../class/day"
import { Hour } from "../class/hour"

export function createYearList() {
    let yearList = []

    let yearNbStart = Temporal.Now.plainDateTimeISO().year - 5
    let yearNbEnd = Temporal.Now.plainDateTimeISO().year + 5

    const loopEnd = yearNbEnd - yearNbStart

    for (let i = 0; i <= loopEnd; i++) {

        let yearDate = Temporal.PlainDateTime.from({ year: yearNbStart + i, month: 1, day: 1 })
        let yearObject = new Year(yearNbStart + i, createSeasonList(yearDate))

        yearList.push(yearObject)
        
    }

    return yearList
}

export function createSeasonList(yearDate: Temporal.PlainDateTime) {
    let seasonList = []

    for (let i = 1; i <= 4; i++) {
        let seasonObject = new Season(i, createMonthList(yearDate))

        seasonList.push(seasonObject)

    }

    return seasonList
}

export function createMonthList(yearDate: Temporal.PlainDateTime) {
    let monthList = []

    for (let i = 1; i <= 12; i++) {

        yearDate = Temporal.PlainDateTime.from({ year: yearDate.year, month: i, day: yearDate.day })
        let monthObject = new Month(i, createWeekList(yearDate))

        monthList.push(monthObject)
    }

    return monthList
}

export function createWeekList(yearDate: Temporal.PlainDateTime) {
    let weekList = []
    let weeksNb

    if (yearDate.daysInMonth > 35) {
        weeksNb = 6
    } else {
        weeksNb = 5
    }

    for (let i = 1; i <= weeksNb; i++) {
        let weekNum = (yearDate.weekOfYear || 0) + i - 1
        let weekObject = new Week(weekNum, createDayList(yearDate))

        weekList.push(weekObject)
    }

    return weekList
}

export function createDayList(yearDate: Temporal.PlainDateTime) {
    let dayList = []
    let daysNb = yearDate.daysInMonth

    for (let i = 1; i <= daysNb; i++) {
        yearDate = Temporal.PlainDateTime.from({ year: yearDate.year, month: yearDate.month, day: i })
        let dayObject = new Day(i, createHourList())

        dayList.push(dayObject)
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
        if (yearList[year].value = yearNb) {
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
        if (seasonList[season].value = seasonValue) {
            return seasonList[season]
        }
    }
}

export function findMonth(monthList: Array<Month> | undefined, monthNb: number) {

    if (!monthList) {
        return undefined
    }


    for (let month in monthList) {

        if (monthList[month].value = monthNb) {

            return monthList[month]
        }
    }
}

export function findWeek(weekList: Array<Week> | undefined, weekNb: number) {
    let weekValue = 0

    if (!weekList) {
        return undefined
    }

    if(weekNb <= 7){
        weekValue = 1
    }

    for (let week in weekList) {
        if (weekList[week].value = weekNb) {
            return weekList[week]
        }
    }
}

export function findDay(dayList: Array<Day> | undefined, dayNb: number) {

    if (!dayList) {
        return undefined
    }

    for (let day in dayList) {
        if (dayList[day].value = dayNb) {
            return dayList[day]
        }
    }
}

export function findHour(hourList: Array<Hour> | undefined, hourNb: number) {

    if (!hourList) {
        return undefined
    }

    for (let hour in hourList) {
        if (hourList[hour].value = hourNb) {
            return hourList[hour]
        }
    }
}