import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorRow } from './color-row';

describe('ColorRow', () => {
  let component: ColorRow;
  let fixture: ComponentFixture<ColorRow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorRow],
    }).compileComponents();

    fixture = TestBed.createComponent(ColorRow);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
