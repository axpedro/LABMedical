import { TestBed } from '@angular/core/testing';

import { TitleHeaderService } from './title-header.service';

describe('TitleHeaderService', () => {
  let service: TitleHeaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TitleHeaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
