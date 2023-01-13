import { TestBed } from '@angular/core/testing';

import { InfopaginaService } from './infopagina.service';

describe('InfopaginaService', () => {
  let service: InfopaginaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfopaginaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
