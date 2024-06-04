import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule, ModalController } from '@ionic/angular';

import { NoUserPageComponent } from './no-user-page.component';

describe('NoUserPageComponent', () => {
  let component: NoUserPageComponent;
  let fixture: ComponentFixture<NoUserPageComponent>;
  let modalController: ModalController;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NoUserPageComponent ],
      imports: [IonicModule.forRoot()],
      providers: [
        {
          provide: ModalController,
          useClass: class {
            async create () {
              return Promise.resolve({
                present: () => {}
              })
            }
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(NoUserPageComponent);
    component = fixture.componentInstance;

    modalController = TestBed.inject(ModalController);

    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('openModal works correctly', () => {

    const spyCreateModal = spyOn(modalController, 'create').and.callThrough();

    component.openModal('info')

    expect(spyCreateModal).toHaveBeenCalled();
  })
});
