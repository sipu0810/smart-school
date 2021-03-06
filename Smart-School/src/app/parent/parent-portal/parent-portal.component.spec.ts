import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentPortalComponent } from './parent-portal.component';

describe('ParentPortalComponent', () => {
  let component: ParentPortalComponent;
  let fixture: ComponentFixture<ParentPortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentPortalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
