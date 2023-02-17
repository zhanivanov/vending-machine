import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [CurrencyPipe]
})
export class HomeComponent implements OnInit {
  public products: Product[] = [];
  public messages: { type: 'info' | 'success' | 'error', message: string }[] = [];
  public amount: number = 0;
  public code: string = '';

  constructor(public productsService: ProductsService, private currency: CurrencyPipe) { }

  public ngOnInit(): void {
    this.getProducts();
  }

  public buy(): Promise<unknown> {
    const productToBuy = this.findProduct(this.code);
    if (!productToBuy) {
      this.messages.push({
        type: 'error',
        message: `There is no product with code ${this.code}.`
      });
      this.code = '';
      return Promise.reject();
    }

    if (productToBuy.price > this.amount) {
      this.messages.push({
        type: 'error',
        message: `Not enough coins inserted. You need ${this.currency.transform(productToBuy.price - this.amount)} more.`
      });
      this.code = '';
      return Promise.reject();
    }


    return this.productsService.updateProduct({ ...productToBuy, stock: productToBuy.stock - 1 })
      .then(() => {
        this.messages.push({
          type: 'success',
          message: `You successfully bought ${productToBuy.name} (${productToBuy.id}).`
        });
        if (this.amount - productToBuy.price) {
          this.messages.push({
            type: 'info',
            message: `You received change: ${this.currency.transform(this.amount - productToBuy.price)}`
          });
        }

        this.reset();
        return this.getProducts()
      });
  }

  public cancel(): Promise<void> {
    this.messages.push({
      type: 'info',
      message: `You cancelled your order. You received your ${this.currency.transform(this.amount)} coins back.`
    });

    this.reset();

    return Promise.resolve();
  }

  public onAmountChange(amount: number) {
    this.messages.push({
      type: 'info',
      message: `Coin ${this.currency.transform(Math.abs(this.amount - amount))} was inserted.`
    });


    this.amount = amount;
  }

  public onCodeChange(code?: string) {
    if (code) {
      this.code = code;
      this.messages.push({
        type: 'info',
        message: `Code ${code} was entered.`
      });
    }
  }

  private reset(): void {
    this.amount = 0;
    this.code = '';
  }

  private findProduct(code: string): Product | undefined {
    return this.products.find(product => product.id === code);
  }

  private getProducts(): Promise<Product[]> {
    return this.productsService.getProducts()
      .then(products => this.products = products);
  }
}
