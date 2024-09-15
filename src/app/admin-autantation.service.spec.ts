import { TestBed } from '@angular/core/testing';

import { AdminAutantationService } from './admin-autantation.service';

describe('AdminAutantationService', () => {
  let service: AdminAutantationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminAutantationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
