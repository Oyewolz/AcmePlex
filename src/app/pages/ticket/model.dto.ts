import { MovieDto, ShowTimeDto } from "../movies/dto";

export class TicketReq {
    email: string;
    refundCode: string;
    paymentReference: string;
    showtimeId: number;
    theatreId: number;
    seatIds: number[];
    price: number;
}

export class TicketDetails {

    id: number;
    email: string;
    code: string;
    bookingStatus: string;
    ticketSeats: number[];
    cancelable: boolean;
    showtime: ShowTimeDto;

}