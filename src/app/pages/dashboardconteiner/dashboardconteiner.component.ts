import { Component, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboardconteiner',
  standalone: true,
  imports: [RouterLink, RouterModule, FormsModule],
  templateUrl: './dashboardconteiner.component.html',
  styleUrls: ['./dashboardconteiner.component.scss']
})
export class DashboardconteinerComponent {
  sidebarVisible = false;

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }

  logout() {
    console.log("Cerrar sesión");
    // Add your logout logic here
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (event.clientX < 50) {
      this.sidebarVisible = true;
    } else if (this.sidebarVisible && event.clientX > 250) {
      this.sidebarVisible = false;
    }
  }
}
