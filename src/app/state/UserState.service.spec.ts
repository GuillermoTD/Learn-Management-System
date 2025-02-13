/* tslint:disable:no-unused-variable */

import { TestBed,  inject } from '@angular/core/testing';
import { UserStateService } from './UserState.service';

describe('Service: UserState', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserStateService]
    });
  });

  it('should ...', inject([UserStateService], (service: UserStateService) => {
    expect(service).toBeTruthy();
  }));
});
