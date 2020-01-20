import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRowComponenetComponent } from './table-row-componenet.component';

describe('TableRowComponenetComponent', () => {
  let component: TableRowComponenetComponent;
  let fixture: ComponentFixture<TableRowComponenetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableRowComponenetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableRowComponenetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
