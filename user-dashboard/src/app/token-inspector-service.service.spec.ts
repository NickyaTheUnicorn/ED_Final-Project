import { TestBed } from '@angular/core/testing';

import { TokenInspectorServiceService } from './token-inspector-service.service';

describe('TokenInspectorServiceService', () => {
  let service: TokenInspectorServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenInspectorServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
