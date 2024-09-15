import { TestBed } from '@angular/core/testing';

import { AdminAuthenticationGuardService } from './admin-authentication-guard.service';

describe('AdminAuthenticationGuardService', () => {
  let service: AdminAuthenticationGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminAuthenticationGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
