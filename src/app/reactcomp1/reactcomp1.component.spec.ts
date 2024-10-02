import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Reactcomp1Component } from './reactcomp1.component';

describe('Reactcomp1Component', () => {
  let component: Reactcomp1Component;
  let fixture: ComponentFixture<Reactcomp1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Reactcomp1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Reactcomp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
