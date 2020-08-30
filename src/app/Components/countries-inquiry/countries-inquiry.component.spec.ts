import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesInquiryComponent } from './countries-inquiry.component';

describe('CountriesInquiryComponent', () => {
  let component: CountriesInquiryComponent;
  let fixture: ComponentFixture<CountriesInquiryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountriesInquiryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountriesInquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
