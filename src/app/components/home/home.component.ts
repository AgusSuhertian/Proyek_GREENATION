import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { MapComponent } from '../map/map.component'; // Import MapComponent
import { CommonModule } from '@angular/common'; // Untuk HTML directive seperti *ngIf dll

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MapComponent],  
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  constructor(private authService: AuthService, private router: Router) {}

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
