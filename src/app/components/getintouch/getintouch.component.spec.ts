import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetintouchComponent } from './getintouch.component';

describe('GetintouchComponent', () => {
  let component: GetintouchComponent;
  let fixture: ComponentFixture<GetintouchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetintouchComponent]
    });
    fixture = TestBed.createComponent(GetintouchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
