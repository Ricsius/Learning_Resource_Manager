import { Component, computed } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { AuthComponent } from './auth/auth.component';
import { LearningResourcesComponent } from './learning-resources/learning-resources.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    AuthComponent, 
    LearningResourcesComponent, 
    NgIf
  ],
})
export class AppComponent {
  constructor(private authService: AuthService) {}

  isAdmin = computed(() => this.authService.activePermission() === 'admin');
}
