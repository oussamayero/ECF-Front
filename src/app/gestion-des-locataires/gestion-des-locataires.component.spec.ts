import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDesLocatairesComponent } from './gestion-des-locataires.component';

describe('GestionDesLocatairesComponent', () => {
  let component: GestionDesLocatairesComponent;
  let fixture: ComponentFixture<GestionDesLocatairesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionDesLocatairesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionDesLocatairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
