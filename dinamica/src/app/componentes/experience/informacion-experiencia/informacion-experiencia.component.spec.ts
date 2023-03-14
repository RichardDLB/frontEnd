import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionExperienciaComponent } from './informacion-experiencia.component';

describe('InformacionExperienciaComponent', () => {
  let component: InformacionExperienciaComponent;
  let fixture: ComponentFixture<InformacionExperienciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacionExperienciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformacionExperienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
