import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeavyElement } from './heavy-element';

describe('HeavyElement', () => {
  let component: HeavyElement;
  let fixture: ComponentFixture<HeavyElement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeavyElement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeavyElement);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
