import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order.model';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  [x: string]: any;
  orders: Order[] = [];

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders(): void {
    this.orderService.getAllOrders().subscribe(
      (data) => {
        this.orders = data;
      },
      (error) => {
        console.error('Error loading orders:', error);
      }
    );
  }

  viewOrderDetails(orderNo: string): void {
    this['router'].navigate(['/order-details', { orderId: 'your_order_id', orderNo: orderNo }]);

  }
}
