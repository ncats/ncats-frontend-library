import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ResolverService } from './resolver.service';

describe('ResolverService', () => {
  let service: ResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
