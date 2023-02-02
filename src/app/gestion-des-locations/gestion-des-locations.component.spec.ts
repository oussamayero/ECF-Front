import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDesLocationsComponent } from './gestion-des-locations.component';

describe('GestionDesLocationsComponent', () => {
  let component: GestionDesLocationsComponent;
  let fixture: ComponentFixture<GestionDesLocationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionDesLocationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionDesLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


