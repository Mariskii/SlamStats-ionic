import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { PlayerService } from './player.service';

describe('PlayerService', () => {
  let service: PlayerService;
  let httpMock: HttpTestingController;

  beforeEach(() => {

    service = TestBed.inject(PlayerService);
    httpMock = TestBed.inject(HttpTestingController);

    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        HttpTestingController,
      ],
      providers: [
        PlayerService
      ],
    });
    service = TestBed.inject(PlayerService);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('getPlayerById works correctly', () => {
  //   service.getPlayerById(1).subscribe( val =>
  //     expect(val).toBeTruthy()
  //   )
  // });
});
