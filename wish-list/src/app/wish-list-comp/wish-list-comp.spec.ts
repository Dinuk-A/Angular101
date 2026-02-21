import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishListComp } from './wish-list-comp';

describe('WishListComp', () => {
  let component: WishListComp;
  let fixture: ComponentFixture<WishListComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WishListComp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WishListComp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
