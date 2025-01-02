import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchievementCardsComponent } from './achievement-cards.component';

describe('AchievementCardsComponent', () => {
  let component: AchievementCardsComponent;
  let fixture: ComponentFixture<AchievementCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AchievementCardsComponent]
    });
    fixture = TestBed.createComponent(AchievementCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
