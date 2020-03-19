import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgForAndChangeDetectionComponent } from './ng-for-and-change-detection.component';

describe('NgForAndChangeDetectionComponent', () => {
  let component: NgForAndChangeDetectionComponent;
  let fixture: ComponentFixture<NgForAndChangeDetectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgForAndChangeDetectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgForAndChangeDetectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
