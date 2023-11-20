import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order.model';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {
  
  [x: string]: any;
orders: any;


  constructor(private orderService: OrderService) {}

  ngOnInit(): void {}


  createOrder(): void {
    this.orderService.createOrder().subscribe(
      (data) => {
        console.log('Order created successfully:', data);
      },
      (error) => {
        console.error('Error creating order:', error);
      }
    );
  }

 
  }
