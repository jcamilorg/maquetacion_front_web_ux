import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutinaItemComponent } from './rutina-item.component';

describe('RutinaItemComponent', () => {
  let component: RutinaItemComponent;
  let fixture: ComponentFixture<RutinaItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RutinaItemComponent]
    });
    fixture = TestBed.createComponent(RutinaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
