import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayElement } from './display-element';

describe('DisplayElement', () => {
  let component: DisplayElement;
  let fixture: ComponentFixture<DisplayElement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayElement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayElement);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
