import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PlayerService } from './player.service';
import { AuthService } from 'src/app/auth/services/auth.service';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { PlayerCache } from '../models/player-cache.interface';


const MockAuthService = {
  user: {
    id:            1,
    nombreUsuario: 'string',
    correo:        'string',
  }
}

const responsePlayerData = {
  id:             1,
  nombreCompleto: 'string',
  nacionalidad:   'string',
  altura:         'string',
  peso:           'string',
  posicion:       'string',
  dorsal:         'string',
  fotoCabeza:     'string',
  fotoCompleta:   'string',
  fnacimiento:    new Date('December 17, 1995 03:24:00'),
}

const expectedTeamsResponse = [
  {
    id:           1,
    nombreEquipo: 'string',
    abreviatura:  'string',
    imagenEquipo: 'string',
  }
]

const expectedStatsResponse = [
  {
    id:     1,
    season: 'string',
    pj:     1,
    ppp:    1,
    tc:     'string',
    tl:     'string',
    rpp:    1,
    app:    1,
    stl:    1,
    blk:    1,
    pm3:    1,
    perc3:  'string',
  }
];

const expectedTrophiesResponse = {
  anillos: 1,
  fmvp:    1,
  mvp:     1,
  allstar: 1,
  dpoy:    1,
  roy:     1,
};

const exceptPlayerCacheResponse: PlayerCache = {
  player: responsePlayerData,
  stats: expectedStatsResponse,
  teams: expectedTeamsResponse,
  trophies: expectedTrophiesResponse
}

fdescribe('PlayerService', () => {
  let service: PlayerService;
  let httpMock: HttpTestingController;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        BrowserModule,
      ],
      providers: [
        PlayerService,
        {
          provide: AuthService,
          useValue: MockAuthService,
        }
      ],
    }).compileComponents();

    service = TestBed.inject(PlayerService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getPlayerById works correctly', () => {

    const expectedResponse = {
      id:             1,
      nombreCompleto: 'string',
      nacionalidad:   'string',
      altura:         'string',
      peso:           'string',
      posicion:       'string',
      dorsal:         'string',
      fotoCabeza:     'string',
      fotoCompleta:   'string',
      fnacimiento:    new Date('December 17, 1995 03:24:00'),
    }

    service.getPlayerById(1).subscribe((res) => {
      expect(res).toEqual(expectedResponse)
    });

    const req = httpMock.expectOne(`${environment.API_URL}/players/1`);

    req.flush(responsePlayerData);
  });

  it('getPlayerById works correctly', () => {

    const expectedResponse = {
      id:             1,
      nombreCompleto: 'string',
      nacionalidad:   'string',
      altura:         'string',
      peso:           'string',
      posicion:       'string',
      dorsal:         'string',
      fotoCabeza:     'string',
      fotoCompleta:   'string',
      fnacimiento:    new Date('December 17, 1995 03:24:00'),
    }

    service.getPlayersByName('shai').subscribe((res) => {
      expect(res).toEqual([expectedResponse])
    });

    const req = httpMock.expectOne(`${environment.API_URL}/players?nombre=shai`);

    req.flush([responsePlayerData]);
  });

  it('getPlayerTeamsById works correctly', () => {

    const expectedResponse = [
      {
        id:           1,
        nombreEquipo: 'string',
        abreviatura:  'string',
        imagenEquipo: 'string',
      }
    ]

    service.getPlayerTeamsById(1).subscribe((res) => {
      expect(res).toEqual(expectedResponse);
    });

    const req = httpMock.expectOne(`${environment.API_URL}/players/1/teams`)

    req.flush(expectedTeamsResponse);
  });

  it('getPlayerStatsById works correctly', () => {

    const expectedResponse = [
      {
        id:     1,
        season: 'string',
        pj:     1,
        ppp:    1,
        tc:     'string',
        tl:     'string',
        rpp:    1,
        app:    1,
        stl:    1,
        blk:    1,
        pm3:    1,
        perc3:  'string',
      }
    ];

    service.getPlayerStatsById(1).subscribe((res) => {
      expect(res).toEqual(expectedResponse);
    });

    const req = httpMock.expectOne(`${environment.API_URL}/stats/player/1`);

    req.flush(expectedStatsResponse);
  });

  it('getPlayerTrophiesById works correctly', () => {

    const expectedResponse = {
      anillos: 1,
      fmvp:    1,
      mvp:     1,
      allstar: 1,
      dpoy:    1,
      roy:     1,
    };

    service.getPlayerTrophiesById(1).subscribe((res) => {
      expect(res).toEqual(expectedResponse);
    });

    const req = httpMock.expectOne(`${environment.API_URL}/trophies/players/1`);

    req.flush(expectedTrophiesResponse);
  });

  //TODO: Revisar más adelante
  it('getPlayerData works correctly', () => {

    const expectedResponse = {
      player: responsePlayerData,
      stats: expectedStatsResponse,
      teams: expectedTeamsResponse,
      trophies: expectedTrophiesResponse
    };

    service.getPlayerData(1).subscribe((res) => {
      expect(res).toEqual(expectedResponse);
    });

    const reqPlayer = httpMock.expectOne(`${environment.API_URL}/players/1`);
    const reqTeams = httpMock.expectOne(`${environment.API_URL}/players/1/teams`);
    const reqStats = httpMock.expectOne(`${environment.API_URL}/stats/player/1`);
    const reqTrophies = httpMock.expectOne(`${environment.API_URL}/trophies/players/1`);

    reqPlayer.flush(responsePlayerData);
    reqTeams.flush(expectedTeamsResponse);
    reqStats.flush(expectedStatsResponse);
    reqTrophies.flush(expectedTrophiesResponse);
  });

  it('isFavoritePlayer works correctly', () => {

    service.isFavoritePlayer(1).subscribe((res) => {
      expect(res).toEqual(true);
    });

    const req = httpMock.expectOne(`${environment.API_URL}/user/1/favoritePlayers/1`);

    req.flush(true);
  });

  it('addFavorite works correctly', () => {

    service.addFavorite(1).subscribe((res) => {
      expect(res).toEqual(true);
    });

    const req = httpMock.expectOne(`${environment.API_URL}/user/addFavorite`);

    req.flush(true);
  });

  it('deleteFavorite works correctly', () => {

    service.deleteFavorite(1).subscribe((res) => {
      expect(res).toEqual(true);
    });

    const req = httpMock.expectOne(`${environment.API_URL}/user/deleteFavorite?idPlayer=1&idUser=1`);

    req.flush(true);
  });

});
