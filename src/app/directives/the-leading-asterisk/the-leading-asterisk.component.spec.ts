import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheLeadingAsteriskComponent } from './the-leading-asterisk.component';

describe('TheLeadingAsteriskComponent', () => {
  let component: TheLeadingAsteriskComponent;
  let fixture: ComponentFixture<TheLeadingAsteriskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheLeadingAsteriskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheLeadingAsteriskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
