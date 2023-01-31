import { Seat, SeatCategory} from "./seatInterface";

export class CinemaHall {
    

    constructor (
        public hallId: number,
        public hallName: string,
        public seats: Seat[][],
        public dolby: boolean,
        public d3: boolean,
        public d4: boolean
    ) {

    }
}


const dummySeat : Seat = new Seat(0,SeatCategory.Normal, false)
const dummyRow: Seat[] = [ dummySeat ]
const dummySeats: Seat[][] = [ dummyRow ]
export const dummyCinemaHall : CinemaHall = new CinemaHall(-1, "dummy Hall", dummySeats, false, false, false)