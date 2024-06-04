import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule, NavParams } from '@ionic/angular';

import { UserPageComponent } from './user-page.component';
import { AuthService } from '../../services/auth.service';
import { of } from 'rxjs';

describe('UserPageComponent', () => {

  const MockAuthService = {
    getFavoritePlayers: () => of([])
  }

  let component: UserPageComponent;
  let fixture: ComponentFixture<UserPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPageComponent ],
      imports: [IonicModule.forRoot()],
      providers: [
        {
          provide:AuthService,
          useValue:MockAuthService
        },
        NavParams
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(UserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
