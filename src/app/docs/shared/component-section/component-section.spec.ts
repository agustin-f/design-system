import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentSection } from './component-section';

describe('ComponentSection', () => {
  let component: ComponentSection;
  let fixture: ComponentFixture<ComponentSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentSection],
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
