import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductShopingCartComponent } from './product-shoping-cart.component';

describe('ProductShopingChartComponent', () => {
  let component: ProductShopingCartComponent;
  let fixture: ComponentFixture<ProductShopingCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductShopingCartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductShopingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
