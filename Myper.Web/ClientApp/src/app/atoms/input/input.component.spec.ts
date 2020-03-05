import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AInputComponent } from './input.component';

describe('InputComponent', () => {
  let component: AInputComponent;
  let fixture: ComponentFixture<AInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
