import { Hour } from "./hour"

export class Day {
    value: number
    hours: Array<Hour>

    constructor(value: number, hours: Array<Hour>){
        this.value = value
        this.hours = hours
    }
}