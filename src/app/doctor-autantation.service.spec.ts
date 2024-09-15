import { TestBed } from '@angular/core/testing';

import { DoctorAutantationService } from './doctor-autantation.service';

describe('DoctorAutantationService', () => {
  let service: DoctorAutantationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctorAutantationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
