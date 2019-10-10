import { TestBed, inject } from '@angular/core/testing';

import { StuServiceService } from './stu-service.service';

describe('StuServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StuServiceService]
    });
  });

  it('should be created', inject([StuServiceService], (service: StuServiceService) => {
    expect(service).toBeTruthy();
  }));
});
