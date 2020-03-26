import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingVaidationComponent } from './adding-vaidation.component';

describe('AddingVaidationComponent', () => {
  let component: AddingVaidationComponent;
  let fixture: ComponentFixture<AddingVaidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddingVaidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddingVaidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
