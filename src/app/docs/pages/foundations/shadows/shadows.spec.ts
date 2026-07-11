import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Shadows } from './shadows';

describe('Shadows', () => {
  let component: Shadows;
  let fixture: ComponentFixture<Shadows>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Shadows],
    }).compileComponents();

    fixture = TestBed.createComponent(Shadows);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
