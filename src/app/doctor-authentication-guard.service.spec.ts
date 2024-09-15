import { TestBed } from '@angular/core/testing';

import { DoctorAuthenticationGuardService } from './doctor-authentication-guard.service';

describe('DoctorAuthenticationGuardService', () => {
  let service: DoctorAuthenticationGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctorAuthenticationGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
