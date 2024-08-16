import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeatestCardsComponent } from './leatest-cards.component';

describe('LeatestCardsComponent', () => {
  let component: LeatestCardsComponent;
  let fixture: ComponentFixture<LeatestCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeatestCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeatestCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
