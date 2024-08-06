import { TestBed } from '@angular/core/testing';

import { RegistroasesorService } from './registroasesor.service';

describe('RegistroasesorService', () => {
  let service: RegistroasesorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistroasesorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
