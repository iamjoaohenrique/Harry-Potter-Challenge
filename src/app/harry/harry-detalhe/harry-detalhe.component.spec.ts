import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HarryDetalheComponent } from './harry-detalhe.component';

describe('HarryDetalheComponent', () => {
  let component: HarryDetalheComponent;
  let fixture: ComponentFixture<HarryDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HarryDetalheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HarryDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
