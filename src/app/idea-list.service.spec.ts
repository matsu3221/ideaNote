import { TestBed } from '@angular/core/testing';

import { IdeaListService } from './idea-list.service';

describe('IdeaListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IdeaListService = TestBed.get(IdeaListService);
    expect(service).toBeTruthy();
  });
});
