import { Day } from "./day"

export class Week {
    value: number
    days: Array<Day>

    constructor(value: number, days: Array<Day>){
        this.value = value
        this.days = days
    }
}