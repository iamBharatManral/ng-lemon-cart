import { Component } from '@angular/core';

@Component({
  selector: 'app-manager',
  template: `
    <div class="container">
      <a routerLink="/manager/home" routerLinkActive="active-link">Manager's Dashboard</a>
      <a routerLink="/manager/users" routerLinkActive="active-link">User Management</a>
      <a routerLink="/manager/receipts" routerLinkActive="active-link">Receipt Lookup</a>
    </div>
    <router-outlet></router-outlet>
  `,
  styles: [
    `
      .container{
        display: flex;
        gap: 1rem;
        margin: 2rem;
      }
      a {
        background: palegoldenrod;
        padding: 1rem;
        text-decoration: none;
        font-size: 1.5rem;
        color: darkred;
      }
    `
  ]
})
export class ManagerComponent {

}
