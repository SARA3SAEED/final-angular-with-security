import { Component, Input } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  order: any;
  orderId: number = 0;
  @Input() searchResult: any;


  constructor(private orderService: OrderService) {}
  searchById(): void {
    this.orderService.getOrderById(this.orderId).subscribe(
      (data) => {
        this.order = data;
      },
      (error) => {
        console.error('Error fetching order by ID', error);
      }
    );
  }

}
