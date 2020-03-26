import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypesOfFormsComponent } from './types-of-forms.component';

describe('TypesOfFormsComponent', () => {
  let component: TypesOfFormsComponent;
  let fixture: ComponentFixture<TypesOfFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypesOfFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypesOfFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
