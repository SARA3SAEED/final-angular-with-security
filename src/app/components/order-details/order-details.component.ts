import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  new= {
    orderNo: '',
  };
  orders: any;
  selectedPaymentMethod: string = ''; 

  newOrderDetail = {
    barcode: 0,
    qty: 0,
    orderNo: ''
  };

  total: number = 0;
  orderNo: string = '';

  constructor(private route: ActivatedRoute, private orderService: OrderService) {}

  ngOnInit(): void {
      // this.orderNo = this.route.snapshot.paramMap.get('orderNo') || ''; // Get the orderNo from the route

    }
  

  addToCart(barcode: number ,qty: number, orderNo: string) {
    this.orderService.addToCart(barcode, qty,orderNo).subscribe(
      (data) => {
        console.log(data);
        this.total = data.total;
      },
      (error) => {
        console.error('Error adding to cart:', error);
      }
    );
    }


    

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

  onPaymentButtonClick(orderNo:string, paymentMethod: string) {
    this.orderService.completeOrder(orderNo, paymentMethod).subscribe(
      (response) => {
        console.log('Payment successful:', response);
      },
      (error) => {
        console.error('Payment error:', error);
      }
    );
  }

}
