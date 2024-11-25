import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, OnChanges, SimpleChanges, Component, EventEmitter, OnInit, OnDestroy, Input, Output, ViewEncapsulation } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailComponent implements OnInit, OnChanges{
  @Input({required: true}) product: Product | undefined;
  @Output() added = new EventEmitter<Product>();

  addToCart() {
    this.added.emit(this.product);
  }

  get productTitle() {
    return this.product?.title;
  }
  constructor() {
    console.log('Product:', this.product);
  }

  ngOnInit(): void {
    console.log('Product:', this.product);
  }

  ngOnDestroy(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    const product = changes['product'];
    if (!product.isFirstChange()) {
      const oldValue = product.previousValue;
      const newValue = product.currentValue;
      console.log('Old value', oldValue);
      console.log('New value', newValue);
    }
  }
}
