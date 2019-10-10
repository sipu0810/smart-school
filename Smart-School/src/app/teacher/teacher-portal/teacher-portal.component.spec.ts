import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherPortalComponent } from './teacher-portal.component';

describe('TeacherPortalComponent', () => {
  let component: TeacherPortalComponent;
  let fixture: ComponentFixture<TeacherPortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherPortalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
