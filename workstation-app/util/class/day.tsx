import { Hour } from "./hour"

export class Day {
    value: number
    hours: Array<Hour>
    dayOfWeek: number

    constructor(value: number, hours: Array<Hour>, dayOfWeek: number){
        this.value = value
        this.hours = hours
        this.dayOfWeek = dayOfWeek
    }
}