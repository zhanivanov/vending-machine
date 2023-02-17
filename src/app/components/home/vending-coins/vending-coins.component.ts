import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-vending-coins',
  templateUrl: './vending-coins.component.html',
  styleUrls: ['./vending-coins.component.scss']
})
export class VendingCoinsComponent {
  public coins: number[] = [0.1, 0.2, 0.5, 1, 2];
  @Input() public insertedAmount: number = 0;
  @Output() public insertedAmountChange: EventEmitter<number> = new EventEmitter();

  public insertCoin(coin: number) {
    this.insertedAmount += coin;
    this.insertedAmountChange.emit(this.insertedAmount);
  }
}
