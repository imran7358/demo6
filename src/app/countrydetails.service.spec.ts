import { TestBed } from '@angular/core/testing';

import { CountrydetailsService } from './countrydetails.service';

describe('CountrydetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CountrydetailsService = TestBed.get(CountrydetailsService);
    expect(service).toBeTruthy();
  });
});
