import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatingCustomDirectivesComponent } from './creating-custom-directives.component';

describe('CreatingCustomDirectivesComponent', () => {
  let component: CreatingCustomDirectivesComponent;
  let fixture: ComponentFixture<CreatingCustomDirectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatingCustomDirectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatingCustomDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
