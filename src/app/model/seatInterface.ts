export enum SeatCategory {
    Normal = "Normal",
    Premium = "Premium",
    Handicap = "Handicap"
}

export class Seat {
    constructor (
        public hallId: number,
        public id: number,
        public category: SeatCategory,
        public booked: boolean
    ) 
    { }
}

export const dummySeat:Seat = new Seat(-1, -1, SeatCategory.Normal, false)