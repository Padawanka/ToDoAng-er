import { TestBed } from '@angular/core/testing';

import { DeleteIdValueService } from './delete-id-value.service';

describe('DeleteIdValueService', () => {
  let service: DeleteIdValueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteIdValueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
