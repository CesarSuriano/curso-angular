import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DietivaNgifComponent } from './dietiva-ngif.component';

describe('DietivaNgifComponent', () => {
  let component: DietivaNgifComponent;
  let fixture: ComponentFixture<DietivaNgifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DietivaNgifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DietivaNgifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
