import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendingCoinsComponent } from './vending-coins.component';

describe('VendingCoinsComponent', () => {
  let component: VendingCoinsComponent;
  let fixture: ComponentFixture<VendingCoinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendingCoinsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendingCoinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
