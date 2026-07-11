import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Radius } from './radius';

describe('Radius', () => {
  let component: Radius;
  let fixture: ComponentFixture<Radius>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Radius],
    }).compileComponents();

    fixture = TestBed.createComponent(Radius);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
