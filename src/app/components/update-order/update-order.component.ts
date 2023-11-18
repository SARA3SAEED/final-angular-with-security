import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UpdateOrderReqDTO } from 'src/app/models/update-order-req-dto.model';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-update-order',
  templateUrl: './update-order.component.html',
  styleUrls: ['./update-order.component.css']
})
export class UpdateOrderComponent implements OnInit {
  orderId !: number;
  updateOrderReqDTO : UpdateOrderReqDTO = {
    newName: '',
    newTotal: 0,
    newStatus: ''
  }; // Initialize with appropriate values

  constructor(private route: ActivatedRoute, private orderService: OrderService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.orderId = +params['id'];
    });
  }

  updateOrder(): void {
    this.orderService.updateOrder(this.orderId, this.updateOrderReqDTO).subscribe(
      (data) => {
        console.log('Order updated successfully:', data);
        // Handle any additional logic or navigation after order update
      },
      (error) => {
        console.error('Error updating order:', error);
      }
    );
  }
}
