import { TestBed } from '@angular/core/testing';

import { ServerBackendService } from './server-backend.service';

describe('ServerBackendService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServerBackendService = TestBed.get(ServerBackendService);
    expect(service).toBeTruthy();
  });
});
