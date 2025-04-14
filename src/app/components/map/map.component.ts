import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  standalone: true,
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
  private map!: L.Map;

  ngAfterViewInit(): void {
    // Inisialisasi map
    this.map = L.map('map').setView([-6.2, 106.8], 13);

    // Tambahkan tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);

    // Tambahkan marker
    L.marker([-6.2, 106.8]).addTo(this.map)
      .bindPopup('Kamu di sini! 🌱')
      .openPopup();

    // Atasi masalah ukuran saat load
    setTimeout(() => {
      this.map.invalidateSize();
    }, 0); // langsung, tidak perlu delay besar
  }
}
