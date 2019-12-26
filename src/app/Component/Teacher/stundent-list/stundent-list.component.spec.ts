import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StundentListComponent } from './stundent-list.component';

describe('StundentListComponent', () => {
  let component: StundentListComponent;
  let fixture: ComponentFixture<StundentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StundentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StundentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
