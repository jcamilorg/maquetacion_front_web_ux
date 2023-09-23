import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlarmDetailComponent } from './alarm-detail.component';

describe('AlarmDetailComponent', () => {
  let component: AlarmDetailComponent;
  let fixture: ComponentFixture<AlarmDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlarmDetailComponent]
    });
    fixture = TestBed.createComponent(AlarmDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
