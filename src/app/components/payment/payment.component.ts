// import { Component } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { Order } from 'src/app/models/order.model';
// import { OrderService } from 'src/app/services/order.service';

// @Component({
//   selector: 'app-payment',
//   templateUrl: './payment.component.html',
//   styleUrls: ['./payment.component.css']
// })
// export class PaymentComponent {


//   orderNo: string = '';
//   selectedPaymentMethod: string = ''; 

 
 

//   constructor(private route: ActivatedRoute, private orderService: OrderService) {}

//   ngOnInit(): void {
//     this.orderNo = this.route.snapshot.paramMap.get('orderNo') || ''; // Get the orderNo from the route

//   }

//   makePayment( orderNo:string , paymentMethod: string ): void {
//     this.orderService.completeOrder(orderNo, paymentMethod).subscribe(
//       (response) => {
//         console.log('Payment successful:', response);
//       },
//       (error) => {
//         console.error('Error making payment:', error);
      
//       }
//     );
//   }
// }
