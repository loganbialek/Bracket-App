import { TestBed } from '@angular/core/testing';

import { SendMatchesService } from './send-matches.service';

describe('SendMatchesService', () => {
  let service: SendMatchesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendMatchesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
