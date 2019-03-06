import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassingdataComponent } from './passingdata.component';

describe('PassingdataComponent', () => {
  let component: PassingdataComponent;
  let fixture: ComponentFixture<PassingdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassingdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassingdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
