import { Week } from "./week"

export class Month {
    value: number
    weeks: Array<Week>

    constructor(value: number, weeks: Array<Week>){
        this.value = value
        this.weeks = weeks
    }
}