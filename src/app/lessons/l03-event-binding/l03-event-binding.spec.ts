import { ComponentFixture, TestBed } from '@angular/core/testing';

import { L03EventBinding } from './l03-event-binding';

describe('L03EventBinding', () => {
  let component: L03EventBinding;
  let fixture: ComponentFixture<L03EventBinding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [L03EventBinding]
    })
    .compileComponents();

    fixture = TestBed.createComponent(L03EventBinding);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
