import { TestBed, inject } from '@angular/core/testing';

import { LogcdService } from './logcd.service';

describe('LogcdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LogcdService]
    });
  });

  it('should be created', inject([LogcdService], (service: LogcdService) => {
    expect(service).toBeTruthy();
  }));
});
