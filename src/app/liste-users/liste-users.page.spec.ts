import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListeUsersPage } from './liste-users.page';

describe('ListeUsersPage', () => {
  let component: ListeUsersPage;
  let fixture: ComponentFixture<ListeUsersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeUsersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListeUsersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
