import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { NavbarComponent } from './navbar';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    // Arrange
    await TestBed.configureTestingModule({
      imports: [NavbarComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    // Assert
    expect(component).toBeTruthy();
  });

  it('should contain the app title "MyApp"', () => {
    // Act
    const compiled = fixture.nativeElement as HTMLElement;
    const brand = compiled.querySelector('.navbar-brand');

    // Assert
    expect(brand).toBeTruthy();
    expect(brand?.textContent).toContain('MyApp');
  });

  it('should have a "Home" link with routerLink="/"', () => {
    // Act
    const compiled = fixture.nativeElement as HTMLElement;
    const navLinks = compiled.querySelectorAll('.navbar-nav a');

    // Assert
    expect(navLinks.length).toBeGreaterThanOrEqual(1);
    const homeLink = navLinks[0] as HTMLAnchorElement;
    expect(homeLink.textContent).toContain('Home');
    expect(homeLink.getAttribute('href')).toBe('/');
  });
});
