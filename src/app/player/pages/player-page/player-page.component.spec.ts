import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AlertController, IonicModule } from '@ionic/angular';

import { PlayerPageComponent } from './player-page.component';
import { PlayerService } from '../../services/player.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';

const MockPlayerService = {

  getPlayerData: () => of(
    {
      player: {
        id:             1,
        nombreCompleto: 'string',
        nacionalidad:   'string',
        altura:         'string',
        peso:           'string',
        posicion:       'string',
        dorsal:         'string',
        fotoCabeza:     'string',
        fotoCompleta:   'string',
        fnacimiento:    new Date()
      },
      stats: [],
      trophies: {
        anillos: 1,
        fmvp:    1,
        mvp:     1,
        allstar: 1,
        dpoy:    1,
        roy:     1,
      },
      teams: []
    }
  ),

  //Variable que determina que devuelve isFavoritePlayer en cada caso que necesite
  shouldReturn: false,

  isFavoritePlayer :() => of(MockPlayerService.shouldReturn),

  addFavorite: () => of({
    response: {
      status: 'CREATED'
    }
  }),

  deleteFavorite: () => of({
    response: {
      status: 'CREATED'
    }
  })

}

describe('PlayerPageComponent when there is no user logged', () => {

  const MockAuthService = {}

  let component: PlayerPageComponent;
  let fixture: ComponentFixture<PlayerPageComponent>;
  let alertController: AlertController;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerPageComponent ],
      imports: [IonicModule.forRoot()],
      providers: [
        {
          provide: PlayerService,
          useValue: MockPlayerService,
        },
        {
          provide: AuthService,
          useValue: MockAuthService,
        },
        {
          provide: ActivatedRoute,
          useValue: {
            params: of([{id: 1}]),
          },
        },
        {
          provide: AlertController,
          useClass: class {
            async create() {
              return Promise.resolve({
                present: () => {}
              })
            }
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PlayerPageComponent);
    component = fixture.componentInstance;

    alertController = TestBed.inject(AlertController);

    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('toggle favorite works correctly', () => {
    const spyPresentAlert = spyOn(component, 'presentAlert');

    component.toggleFavorite();

    expect(spyPresentAlert).toHaveBeenCalled();
  });

  it('retryFetch works correctly', () => {
    const spyFetchPlayerData = spyOn(component, 'fetchPlayerData');

    component.retryFetch();

    expect(component.loading).toBeTruthy();
    expect(component.errorHapened).toBeFalsy();
    expect(spyFetchPlayerData).toHaveBeenCalled();
  });

  it('presentAlert works correctly', async () => {
    const spyCreate = spyOn(alertController, 'create').and.callThrough();

    await component.presentAlert('','');

    expect(spyCreate).toHaveBeenCalled();
  });
});


describe('PlayerPageComponent when the user is logged', () => {

  const MockAuthService = {
    user: {},
  }

  let component: PlayerPageComponent;
  let fixture: ComponentFixture<PlayerPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerPageComponent ],
      imports: [IonicModule.forRoot()],
      providers: [
        {
          provide: PlayerService,
          useValue: MockPlayerService,
        },
        {
          provide: AuthService,
          useValue: MockAuthService,
        },
        {
          provide: ActivatedRoute,
          useValue: {
            params: of([{id: 1}]),
          },
        },
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PlayerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('toggle favorite works correctly when player is not favorite', () => {
    const spyPresentAlert = spyOn(component, 'presentAlert');

    MockPlayerService.shouldReturn = false;
    fixture.detectChanges();

    component.toggleFavorite();

    expect(spyPresentAlert).toHaveBeenCalled();
    expect(component.isFavorite).toBeTruthy();
  });

  it('toggle favorite works correctly when player is favorite', () => {
    const spyPresentAlert = spyOn(component, 'presentAlert');

    MockPlayerService.shouldReturn = true;
    fixture.detectChanges();

    component.toggleFavorite();


    expect(spyPresentAlert).toHaveBeenCalled();
    expect(component.isFavorite).toBeFalsy();
  });

});
