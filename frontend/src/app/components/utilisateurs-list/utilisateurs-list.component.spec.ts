import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilisateursListComponent } from './utilisateurs-list.component';

describe('UtilisateursListComponent', () => {
  let component: UtilisateursListComponent;
  let fixture: ComponentFixture<UtilisateursListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtilisateursListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtilisateursListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
