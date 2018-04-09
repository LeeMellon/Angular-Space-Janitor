import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Room000Component } from './room000.component';

describe('Room000Component', () => {
  let component: Room000Component;
  let fixture: ComponentFixture<Room000Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Room000Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Room000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
