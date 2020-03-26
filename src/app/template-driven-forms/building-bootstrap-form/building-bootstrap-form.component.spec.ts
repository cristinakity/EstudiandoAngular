import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingBootstrapFormComponent } from './building-bootstrap-form.component';

describe('BuildingBootstrapFormComponent', () => {
  let component: BuildingBoostrapFormComponent;
  let fixture: ComponentFixture<BuildingBoostrapFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildingBootstrapFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingBootstrapFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
