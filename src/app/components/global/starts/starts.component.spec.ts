import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartsComponent } from './starts.component';

describe('StartsComponent', () => {
  let component: StartsComponent;
  let fixture: ComponentFixture<StartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
