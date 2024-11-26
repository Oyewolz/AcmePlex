import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-tickets',
  templateUrl: './my-tickets.component.html',
  styleUrls: ['./my-tickets.component.scss']
})
export class MyTicketsComponent {

  tickets = [
    {
      id: 1,
      movie: 'Lift',
      time: '13h15m - 13.01.2024',
      location: 'University District',
      image: 'https://images.unsplash.com/photo-1497215641119-bbe6d71ebaae?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDExOHx8dXNpbmclMjBjb21wdXRlcnxlbnwwfHx8fDE3MzAxNzY1Mjd8MA&ixlib=rb-4.0.3&w=1400',
      cancelable: false,
    },
    {
      id: 2,
      movie: 'Venom: The Last Dance',
      time: '16h50m - 25.10.2024',
      location: 'University District',
      image: 'https://images.unsplash.com/photo-1497215641119-bbe6d71ebaae?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDExOHx8dXNpbmclMjBjb21wdXRlcnxlbnwwfHx8fDE3MzAxNzY1Mjd8MA&ixlib=rb-4.0.3&w=1400',
      cancelable: false,
    },
    {
      id: 3,
      movie: 'Red One',
      time: '12h10m - 20.11.2024',
      location: 'University District',
      image: 'https://images.unsplash.com/photo-1497215641119-bbe6d71ebaae?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDExOHx8dXNpbmclMjBjb21wdXRlcnxlbnwwfHx8fDE3MzAxNzY1Mjd8MA&ixlib=rb-4.0.3&w=1400',
      cancelable: true,
    },
  ];

  cancelTicket(ticketId: number) {
    if (confirm('Are you sure you want to cancel this ticket?')) {
      this.tickets = this.tickets.filter((ticket) => ticket.id !== ticketId);
    }
  }

}
