import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResualtsComponent } from './resualts.component';

describe('ResualtsComponent', () => {
  let component: ResualtsComponent;
  let fixture: ComponentFixture<ResualtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResualtsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResualtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
