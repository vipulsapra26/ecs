import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcsAboutComponent } from './ecs-about.component';

describe('EcsAboutComponent', () => {
  let component: EcsAboutComponent;
  let fixture: ComponentFixture<EcsAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcsAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcsAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
