import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-edit-product-modal',
  templateUrl: './edit-product-modal.component.html',
  styleUrls: ['./edit-product-modal.component.scss']
})
export class EditProductModalComponent implements OnInit {
  @Input() public isOpen: boolean = false;
  @Input() public product?: Product;
  @Output() public isOpenChange: EventEmitter<boolean> = new EventEmitter();
  @Output() public onSave: EventEmitter<Product> = new EventEmitter();

  public productForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) { }

  public ngOnInit(): void {
    this.initializeForm();
  }

  public save(): void {
    this.onSave.emit({ ...this.product, ...this.productForm.value });
    this.isOpenChange.emit(false);
  }

  private initializeForm(): void {
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      img: '',
      price: 0,
      stock: [0, Validators.max(15)]
    });

    this.fillForm();
  }

  private fillForm(): void {
    this.productForm.patchValue({ ...this.product });
  }
}
