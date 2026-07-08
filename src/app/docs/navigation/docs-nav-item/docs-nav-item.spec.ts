import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsNavItem } from './docs-nav-item';

describe('DocsNavItem', () => {
  let component: DocsNavItem;
  let fixture: ComponentFixture<DocsNavItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocsNavItem],
    }).compileComponents();

    fixture = TestBed.createComponent(DocsNavItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
