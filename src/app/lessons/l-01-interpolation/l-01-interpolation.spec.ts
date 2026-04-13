import { ComponentFixture, TestBed } from '@angular/core/testing';

import { L01Interpolation } from './l-01-interpolation';

describe('L01Interpolation', () => {
  let component: L01Interpolation;
  let fixture: ComponentFixture<L01Interpolation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [L01Interpolation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(L01Interpolation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
