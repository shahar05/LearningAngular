import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTableCComponent } from './my-table-c.component';

describe('MyTableCComponent', () => {
  let component: MyTableCComponent;
  let fixture: ComponentFixture<MyTableCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTableCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTableCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
