import { Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { MapPageComponent } from './components/map-page/map-page.component'; // ✅ import MapPage

import { AuthGuard } from './services/auth.guard'; // ✅ import guard-nya

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'about',
    component: AboutComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'blog',
    component: BlogComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'gallery',
    component: GalleryComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'map',
    component: MapPageComponent,
    canActivate: [AuthGuard]
  }
  ,
  { path: '**', redirectTo: 'home' },
];
