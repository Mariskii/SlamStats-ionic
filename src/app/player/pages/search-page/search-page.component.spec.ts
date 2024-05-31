import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchPageComponent } from './search-page.component';
import { PlayerService } from '../../services/player.service';
import { of } from 'rxjs';

describe('SearchPageComponent', () => {

  const MockPlayerService = {
    getPlayersByName: () => of([])
  }

  let component: SearchPageComponent;
  let fixture: ComponentFixture<SearchPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPageComponent ],
      imports: [IonicModule.forRoot()],
      providers: [
        {
          provide: PlayerService,
          useValue: MockPlayerService
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('searchByName works correctly when term is <= 1', () => {
    const spyClearPlayersSearched = spyOn(component, 'clearPlayersSearched');

    component.searchByName({target:{value:'s'}});

    expect(spyClearPlayersSearched).toHaveBeenCalled();
  });

  it('searchByName works correctly when term is > 1', () => {
    const spyFetchPlayers = spyOn(component, 'fetchPlayers');

    component.searchByName({target:{value:'shaq'}});

    expect(spyFetchPlayers).toHaveBeenCalled();
  });

  it('clearPlayers works correctly', () => {
    const result = component.clearPlayersSearched();

    expect(component.players).toBeFalsy();
    expect(result).toBeTruthy();
  });

  it('fetchPlayers works correctly', () => {
    component.searchTerm = 'allen'

    component.fetchPlayers();
  });
});
