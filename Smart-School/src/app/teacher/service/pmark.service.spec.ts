import { TestBed, inject } from '@angular/core/testing';

import { PmarkService } from './pmark.service';

describe('PmarkService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PmarkService]
    });
  });

  it('should be created', inject([PmarkService], (service: PmarkService) => {
    expect(service).toBeTruthy();
  }));
});
