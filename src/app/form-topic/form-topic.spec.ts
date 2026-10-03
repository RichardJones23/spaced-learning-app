import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormTopic } from './form-topic';

describe('Form', () => {
  let component: FormTopic;
  let fixture: ComponentFixture<FormTopic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormTopic],
    }).compileComponents();

    fixture = TestBed.createComponent(FormTopic);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
