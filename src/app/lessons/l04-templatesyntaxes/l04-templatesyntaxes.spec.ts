import { ComponentFixture, TestBed } from '@angular/core/testing';

import { L04Templatesyntaxes } from './l04-templatesyntaxes';

describe('L04Templatesyntaxes', () => {
  let component: L04Templatesyntaxes;
  let fixture: ComponentFixture<L04Templatesyntaxes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [L04Templatesyntaxes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(L04Templatesyntaxes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
