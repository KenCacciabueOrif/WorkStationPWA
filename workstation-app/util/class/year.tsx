import { Season } from "./season"

export class Year {
    value: number
    seasons: Array<Season>

    constructor(value: number, seasons: Array<Season>){
        this.value = value
        this.seasons = seasons
    }
}