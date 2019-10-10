import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostHomeworkComponent } from './post-homework.component';

describe('PostHomeworkComponent', () => {
  let component: PostHomeworkComponent;
  let fixture: ComponentFixture<PostHomeworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostHomeworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostHomeworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
