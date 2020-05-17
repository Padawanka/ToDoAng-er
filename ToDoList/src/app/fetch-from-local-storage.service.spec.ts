import { TestBed } from '@angular/core/testing';

import { FetchFromLocalStorageService } from './fetch-from-local-storage.service';

describe('FetchFromLocalStorageService', () => {
  let service: FetchFromLocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchFromLocalStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
