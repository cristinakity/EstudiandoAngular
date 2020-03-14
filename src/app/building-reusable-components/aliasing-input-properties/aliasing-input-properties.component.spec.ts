import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AliasingInputPropertiesComponent } from './aliasing-input-properties.component';

describe('AliasingInputPropertiesComponent', () => {
  let component: AliasingInputPropertiesComponent;
  let fixture: ComponentFixture<AliasingInputPropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AliasingInputPropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AliasingInputPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
