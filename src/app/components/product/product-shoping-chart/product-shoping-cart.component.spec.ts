import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductShopingChartComponent } from './product-shoping-cart.component';

describe('ProductShopingChartComponent', () => {
  let component: ProductShopingChartComponent;
  let fixture: ComponentFixture<ProductShopingChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductShopingChartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductShopingChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
