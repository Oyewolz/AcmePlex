export class TicketReq {
    email: string;
    refundCode: string;
    paymentReference: string;
    showTimeId: number;
    theatreId: number;
    seatIds: number [];
    price: number;
}