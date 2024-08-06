import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SociedadPage } from './sociedad.page';

describe('SociedadPage', () => {
  let component: SociedadPage;
  let fixture: ComponentFixture<SociedadPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SociedadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
