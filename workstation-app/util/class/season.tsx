import { Month } from "./month"

export class Season {
    value: number
    months: Array<Month>

    constructor(value: number, months: Array<Month>){
        this.value = value
        this.months = months
    }
}