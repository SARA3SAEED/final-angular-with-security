import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{

  
  products: any[] = []; // This is a property to store the list of products
  newProductForm: FormGroup;
  selectedProduct: any = null;

  constructor(private productService: ProductService,  private fb: FormBuilder) {

    this.newProductForm = this.fb.group({
      type: ['PHYSICAL'],
      barcod: [null, Validators.required],
      product_name: [null, Validators.required],
      description: [null, Validators.required],
      price: [null, Validators.required],
      serialNo: [null],
      provider: [null],
      weight: [null, Validators.required],
      height: [null, Validators.required]
    });
  }

  ngOnInit() {
    this.productService.getAllProducts().subscribe(
      (data) => {
        this.products = data; 
      },
      (error) => {
        console.error('Error fetching products', error);
      }
    );
  }
  

  onSubmit() {
    if (this.newProductForm.valid) {
      if (this.selectedProduct) {
        // If a product is selected, update it
        this.updateProduct(this.newProductForm.value);
      } else {
        // If no product is selected, add a new product
        this.addProduct(this.newProductForm.value);
      }
    }
  }
  
  addProduct(productData: any) {
    this.productService.addProduct(productData).subscribe(
      (data) => {
        this.products.push(data);
        this.newProductForm.reset();
      },
      (error) => {
        console.error('Error adding product', error);
      }
    );
  }
  
  updateProduct(productData: any) {
    if (this.selectedProduct) {
      const barcod = this.selectedProduct.barcod;
      this.productService.updateProduct(barcod, productData).subscribe(
        (data) => {
          // Replace the updated product in the products array
          const index = this.products.findIndex(product => product.barcod === barcod);
          if (index !== -1) {
            this.products[index] = data;
          }
          this.newProductForm.reset();
          this.selectedProduct = null;
        },
        (error) => {
          console.error('Error updating product', error);
        }
      );
    }
  }
  
  editProduct(product: any) {
    // Set the selected product for editing
    this.selectedProduct = product;
  
    // Populate the form with the selected product's data
    this.newProductForm.patchValue({
      type: product.type,
      barcod: product.barcod,
      product_name: product.product_name,
      description: product.description,
      price: product.price,
      serialNo: product.serialNo,
      provider: product.provider,
      weight: product.weight,
      height: product.height
    });
  }
  
  cancelEdit() {
    // Clear the form and reset the selected product
    this.newProductForm.reset();
    this.selectedProduct = null;
  }
  
  deleteProduct(barcod: number) {
    this.productService.deleteProduct(barcod).subscribe(
      () => {
        // Filter out the deleted product from the products array
        this.products = this.products.filter(product => product.barcod !== barcod);
      },
      (error) => {
        console.error('Error deleting product', error);
      }
    );
  }

}
