import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  private baseUrl3 = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

    //product service
  
    getAllProducts(): Observable<any> {
      return this.http.get(`${this.baseUrl3}/Allproduct`);
    }
  
    addProduct(productData: any): Observable<any> {
      return this.http.post(`${this.baseUrl3}/products`, productData);
    }
  
    deleteProduct(barcode: number): Observable<any> {
      return this.http.delete(`${this.baseUrl3}/products/${barcode}`);
    }
  

    updateProduct(barcode: number, productData: any): Observable<any> {
      return this.http.put(`${this.baseUrl3}/products/${barcode}`, productData);
    }
  
    patchProduct(barcode: number, productData: any): Observable<any> {
      return this.http.patch(`${this.baseUrl3}/products/${barcode}`, productData);
    }
}
