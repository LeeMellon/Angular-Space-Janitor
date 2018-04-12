import { TestBed, inject } from '@angular/core/testing';

import { AuthGuard.ServiceService } from './auth-guard.service.service';

describe('AuthGuard.ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuard.ServiceService]
    });
  });

  it('should be created', inject([AuthGuard.ServiceService], (service: AuthGuard.ServiceService) => {
    expect(service).toBeTruthy();
  }));
});
