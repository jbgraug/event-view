import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { SpeakerService } from './speaker.service';

describe('Speaker Service', () => {
  beforeEachProviders(() => [SpeakerService]);

  it('should ...',
      inject([SpeakerService], (service: SpeakerService) => {
    expect(service).toBeTruthy();
  }));
});
