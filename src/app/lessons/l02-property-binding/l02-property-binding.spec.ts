import { ComponentFixture, TestBed } from '@angular/core/testing';

import { L02PropertyBinding } from './l02-property-binding';

describe('L02PropertyBinding', () => {
  let component: L02PropertyBinding;
  let fixture: ComponentFixture<L02PropertyBinding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [L02PropertyBinding]
    })
    .compileComponents();

    fixture = TestBed.createComponent(L02PropertyBinding);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
