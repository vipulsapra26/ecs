import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {RegisterComponentComponent} from "./preregister-component.component";

describe('RegisterComponentComponent', () => {
  let component: RegisterComponentComponent;
  let fixture: ComponentFixture<RegisterComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterComponentComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
