// order-details.model.ts

export interface OrderDetailsRequest {
    barcode: number;
    qty: number;
    price?: number;
    productName?: string;
    total?: number; // Add 'total' property here
  }
  