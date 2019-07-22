import { TestBed } from '@angular/core/testing';

import { IdeaImageService } from './idea-image.service';

describe('IdeaImageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IdeaImageService = TestBed.get(IdeaImageService);
    expect(service).toBeTruthy();
  });
});
