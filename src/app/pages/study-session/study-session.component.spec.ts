import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudySessionComponent } from './study-session.component';

describe('StudySessionComponent', () => {
  let component: StudySessionComponent;
  let fixture: ComponentFixture<StudySessionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudySessionComponent]
    });
    fixture = TestBed.createComponent(StudySessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
