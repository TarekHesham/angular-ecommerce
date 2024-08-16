import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeatestProductsComponent } from './leatest-products.component';

describe('LeatestProductsComponent', () => {
  let component: LeatestProductsComponent;
  let fixture: ComponentFixture<LeatestProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeatestProductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeatestProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
