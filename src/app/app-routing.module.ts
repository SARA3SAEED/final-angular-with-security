import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderListComponent } from './components/order-list/order-list.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { CreateOrderComponent } from './components/create-order/create-order.component';
import { UpdateOrderComponent } from './components/update-order/update-order.component';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
// import { PaymentComponent } from './components/payment/payment.component';

const routes: Routes = [
  // { path: '', redirectTo: '/orders', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'orders', component: OrderListComponent },
  { path: 'order-details/:orderNo', component: OrderDetailsComponent },
  { path: 'order/:orderId', component: OrderDetailsComponent },
  { path: 'orders/:id', component: OrderDetailsComponent },
  { path: 'create-order', component: CreateOrderComponent },
  { path: 'update-order/:id', component: UpdateOrderComponent },
  { path: 'products', component: ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
