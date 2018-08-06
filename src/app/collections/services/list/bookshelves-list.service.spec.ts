import { TestBed, inject } from '@angular/core/testing';

import { BookShelvesListService } from './bookshelves-list.service';

describe('BookShelvesListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookShelvesListService]
    });
  });

  it('should be created', inject([BookShelvesListService], (service: BookShelvesListService) => {
    expect(service).toBeTruthy();
  }));
});
