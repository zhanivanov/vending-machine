import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as products from '../../assets/mock-data/products.json';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private mockProducts: Map<string, Product> = new Map(Array.from(products).map(product => [product.id, product]));

  constructor(private http: HttpClient) {
  }

  public getProducts(): Promise<Product[]> {
    return Promise.resolve([...this.mockProducts.values()]);
    // return this.http.get<Product[]>('/assets/mock-data/products.json');
  }

  public addProduct(product: Product): Promise<string> {
    const productId: string = this.getId();
    this.mockProducts.set(productId, { ...product, id: productId });

    return Promise.resolve(productId);
  }

  public updateProduct(product: Product): Promise<string> {
    if (this.mockProducts.has(product.id)) {
      this.mockProducts.set(product.id, product)
    }

    return Promise.resolve(product.id);
  }

  public deleteProducts(id: string[]): Promise<boolean> {
    id.forEach(id => this.mockProducts.delete(id));

    return Promise.resolve(true);
  }

  private getId(): string {
    return Math.floor(Math.random() * 9000 + 1000).toString();
  }
}
