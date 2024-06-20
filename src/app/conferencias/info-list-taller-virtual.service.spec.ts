import { TestBed } from '@angular/core/testing';

import { InfoListTallerVirtualService } from './info-list-taller-virtual.service';

describe('InfoListTallerVirtualService', () => {
  let service: InfoListTallerVirtualService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoListTallerVirtualService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
