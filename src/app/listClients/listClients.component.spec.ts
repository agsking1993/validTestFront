import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListClientComponent } from './listClients.component';

describe('ClientsComponent', () => {
  let component: ListClientComponent;
  let fixture: ComponentFixture<ListClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
