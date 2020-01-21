import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputDataBindComponent } from './input-data-bind.component';

describe('InputDataBindComponent', () => {
  let component: InputDataBindComponent;
  let fixture: ComponentFixture<InputDataBindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InputDataBindComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputDataBindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
