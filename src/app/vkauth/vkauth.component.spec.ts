import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VKauthComponent } from './vkauth.component';

describe('VKauthComponent', () => {
  let component: VKauthComponent;
  let fixture: ComponentFixture<VKauthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VKauthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VKauthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
