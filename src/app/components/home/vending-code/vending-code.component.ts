import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-vending-code',
  templateUrl: './vending-code.component.html',
  styleUrls: ['./vending-code.component.scss']
})
export class VendingCodeComponent {
  @Input() public disabled: boolean = false;
  @Input() public code: string = '';
  @Output() public codeChange: EventEmitter<string> = new EventEmitter();

  public get nums(): number[] {
    return [...Array(10).keys()];
  }

  public enterCode(num: number) {
    if (this.code?.length === 4) {
      return;
    }

    this.code = `${this.code || ''}${num}`;

    if (this.code?.length < 4) {
      this.codeChange.emit(undefined);
    } else {
      this.codeChange.emit(this.code);
    }
  }
}
