import { TestBed, inject } from '@angular/core/testing';

import { PhomeworkService } from './phomework.service';

describe('PhomeworkService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhomeworkService]
    });
  });

  it('should be created', inject([PhomeworkService], (service: PhomeworkService) => {
    expect(service).toBeTruthy();
  }));
});
