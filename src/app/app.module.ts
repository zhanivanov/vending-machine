import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClarityModule } from '@clr/angular';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { EditProductModalComponent } from './components/products/edit-modal/edit-product-modal.component';
import { ProductsComponent } from './components/products/products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductCardComponent } from './components/home/product-card/product-card.component';
import { VendingCodeComponent } from './components/home/vending-code/vending-code.component';
import { VendingCoinsComponent } from './components/home/vending-coins/vending-coins.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HomeComponent,
    EditProductModalComponent,
    ProductCardComponent,
    VendingCodeComponent,
    VendingCoinsComponent
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ClarityModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
