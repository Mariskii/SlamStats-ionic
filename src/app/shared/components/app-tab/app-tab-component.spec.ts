import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { AppTabComponent } from './app-tab.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';


describe('RecomendationCard', () => {
  let component: AppTabComponent;
  let fixture: ComponentFixture<AppTabComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AppTabComponent ],
      imports: [IonicModule.forRoot()],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of([{id: 1}]),
          },
        },
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('setCurrentTab works correctly', () => {
    component.setCurrentTab({tab:'home'});

    expect(component.currentTab).toEqual('home');
  });
});
