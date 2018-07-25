import { TestBed, inject } from '@angular/core/testing';

import { PlaygroundService } from './playground.service';

describe('PlaygroundService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlaygroundService]
    });
  });

  it('should be created', inject([PlaygroundService], (service: PlaygroundService) => {
    expect(service).toBeTruthy();
  }));
});
