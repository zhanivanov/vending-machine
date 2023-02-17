import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public products: Product[] = [];
  public selectedProducts: Product[] = [];
  public isEditProductDialogOpen: boolean = false;

  constructor(public productsService: ProductsService) { }

  public ngOnInit(): void {
    this.getProducts();
  }

  public onSave(product: Product) {
    const savePromise = !product.id ? this.productsService.addProduct(product) : this.productsService.updateProduct(product);

    return savePromise.then(() => this.getProducts());
  }

  public delete(products: Product[]) {
    return this.productsService.deleteProducts(products.map(product => product.id))
      .then(() => this.getProducts());
  }

  private getProducts(): Promise<Product[]> {
    return this.productsService.getProducts()
      .then(products => this.products = products);
  }
}
