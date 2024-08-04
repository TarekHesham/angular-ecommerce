import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductHeroComponent } from './product-hero.component';

describe('ProductHeroComponent', () => {
  let component: ProductHeroComponent;
  let fixture: ComponentFixture<ProductHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductHeroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
