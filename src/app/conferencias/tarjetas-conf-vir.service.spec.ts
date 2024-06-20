import { TestBed } from '@angular/core/testing';

import { TarjetasConfVirService } from './tarjetas-conf-vir.service';

describe('TarjetasConfVirService', () => {
  let service: TarjetasConfVirService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TarjetasConfVirService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
