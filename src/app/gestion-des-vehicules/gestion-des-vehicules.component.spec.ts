import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDesVehiculesComponent } from './gestion-des-vehicules.component';

describe('GestionDesVehiculesComponent', () => {
  let component: GestionDesVehiculesComponent;
  let fixture: ComponentFixture<GestionDesVehiculesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionDesVehiculesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionDesVehiculesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
