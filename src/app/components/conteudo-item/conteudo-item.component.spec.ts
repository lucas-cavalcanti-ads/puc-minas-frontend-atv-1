import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConteudoItemComponent } from './conteudo-item.component';

describe('ConteudoItemComponent', () => {
  let component: ConteudoItemComponent;
  let fixture: ComponentFixture<ConteudoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConteudoItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConteudoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
