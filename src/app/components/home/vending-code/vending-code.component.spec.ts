import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendingCodeComponent } from './vending-code.component';

describe('VendingCodeComponent', () => {
  let component: VendingCodeComponent;
  let fixture: ComponentFixture<VendingCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendingCodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendingCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
