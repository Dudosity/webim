import { TestBed } from '@angular/core/testing';

import { VKserviceService } from './vkservice.service';

describe('VKserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VKserviceService = TestBed.get(VKserviceService);
    expect(service).toBeTruthy();
  });
});
