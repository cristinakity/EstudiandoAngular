import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AliasingOutputPropertiesComponent } from './aliasing-output-properties.component';

describe('AliasingOutputPropertiesComponent', () => {
  let component: AliasingOutputPropertiesComponent;
  let fixture: ComponentFixture<AliasingOutputPropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AliasingOutputPropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AliasingOutputPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
