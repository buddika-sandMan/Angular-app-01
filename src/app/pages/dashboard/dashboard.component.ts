import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  headerMessage:string = "Shop More!";

  setHeaderMsg() {
    this.headerMessage = "Don't show"
  }

}
