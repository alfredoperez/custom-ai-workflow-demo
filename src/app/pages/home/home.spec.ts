import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    // Arrange
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    // Assert
    expect(component).toBeTruthy();
  });

  it('should display the welcome heading', () => {
    // Act
    const compiled = fixture.nativeElement as HTMLElement;
    const heading = compiled.querySelector('h1');

    // Assert
    expect(heading).toBeTruthy();
    expect(heading?.textContent).toContain('Welcome to the App');
  });

  it('should display the description text', () => {
    // Act
    const compiled = fixture.nativeElement as HTMLElement;
    const paragraph = compiled.querySelector('p');

    // Assert
    expect(paragraph).toBeTruthy();
    expect(paragraph?.textContent).toContain(
      'This is the home page. Start building something great.'
    );
  });
});
