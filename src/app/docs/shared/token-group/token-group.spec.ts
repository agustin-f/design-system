import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenGroup } from './token-group';

describe('TokenGroup', () => {
  let component: TokenGroup;
  let fixture: ComponentFixture<TokenGroup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TokenGroup],
    }).compileComponents();

    fixture = TestBed.createComponent(TokenGroup);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
