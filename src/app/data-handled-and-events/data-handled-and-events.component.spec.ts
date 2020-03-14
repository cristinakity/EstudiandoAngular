import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataHandledAndEventsComponent } from './data-handled-and-events.component';

describe('DataHandledAndEventsComponent', () => {
  let component: DataHandledAndEventsComponent;
  let fixture: ComponentFixture<DataHandledAndEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataHandledAndEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataHandledAndEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
