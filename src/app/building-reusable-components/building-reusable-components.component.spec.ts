import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingReusableComponentsComponent } from './building-reusable-components.component';

describe('BuildingReusableComponentsComponent', () => {
  let component: BuildingReusableComponentsComponent;
  let fixture: ComponentFixture<BuildingReusableComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildingReusableComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingReusableComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
