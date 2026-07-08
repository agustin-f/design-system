import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsHeader } from './docs-header';

describe('DocsHeader', () => {
  let component: DocsHeader;
  let fixture: ComponentFixture<DocsHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocsHeader],
    }).compileComponents();

    fixture = TestBed.createComponent(DocsHeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
