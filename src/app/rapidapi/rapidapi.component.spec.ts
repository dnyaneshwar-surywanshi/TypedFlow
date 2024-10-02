import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RapidapiComponent } from './rapidapi.component';

describe('RapidapiComponent', () => {
  let component: RapidapiComponent;
  let fixture: ComponentFixture<RapidapiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RapidapiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RapidapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
