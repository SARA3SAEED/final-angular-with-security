import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Order } from '../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private apiUrl = 'http://localhost:8080/api/order-details'; 

  private baseUrl = 'http://localhost:8080/api/orders'; 

  // private baseUrl2 = 'http://localhost:8080/api/complete/order';


  constructor(private http: HttpClient) {}


  addToCart(barcode: number , qty:number, orderNo:string): Observable<any> {
    const url = `${this.apiUrl}/add-to-cart/barcode/${barcode}/qty/${qty}/orderNo/${orderNo}`;
    return this.http.get(url);
    
  }

  completeOrder(orderNo: string, paymentMethod: string): Observable<any> {
    const url = `http://localhost:8080/api/complete/order/${orderNo}/${paymentMethod}`;
    return this.http.get(url, {});
  }




  getAllOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.baseUrl}`);
  }

  getOrderById(orderId: number): Observable<Order> {
    return this.http.get<Order>(`${this.baseUrl}/${orderId}`);
  }

  createOrder(): Observable<Order> {
    return this.http.post<Order>(`${this.baseUrl}/`, {});
  }

  // completeOrder(orderNo: string, paymentMethod: string): Observable<Order> {
  //   return this.http.get<Order>(`${this.baseUrl}/complete/order/${orderNo}/${paymentMethod}`);
  // }

  deleteOrder(orderId: number): Observable<string> {
    return this.http.delete<string>(`${this.baseUrl}/delete/${orderId}`);
  }

  updateOrder(orderId: number, updateOrderReqDTO: any): Observable<Order> {
    return this.http.put<Order>(`${this.baseUrl}/update/${orderId}`, updateOrderReqDTO);
  }
}
