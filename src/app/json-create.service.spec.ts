import { TestBed } from '@angular/core/testing';

import { JsonCreateService } from './json-create.service';

describe('JsonCreateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JsonCreateService = TestBed.get(JsonCreateService);
    expect(service).toBeTruthy();
  });
});
