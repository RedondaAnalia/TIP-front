import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMilestonesComponent } from './my-milestones.component';

describe('MyMilestonesComponent', () => {
  let component: MyMilestonesComponent;
  let fixture: ComponentFixture<MyMilestonesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyMilestonesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyMilestonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
