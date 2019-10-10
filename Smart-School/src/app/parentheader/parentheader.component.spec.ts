import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentheaderComponent } from './parentheader.component';

describe('ParentheaderComponent', () => {
  let component: ParentheaderComponent;
  let fixture: ComponentFixture<ParentheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
