import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IformComponent } from './iform.component';

describe('IformComponent', () => {
  let component: IformComponent;
  let fixture: ComponentFixture<IformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ IformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
