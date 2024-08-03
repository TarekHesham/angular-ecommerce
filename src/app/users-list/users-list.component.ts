import { Component } from '@angular/core';
import { UserCardComponent } from '../user-card/user-card.component';
import { users } from '../../../public/data/users.json';
import { SearchBarComponent } from '../search-bar/search-bar.component';
// import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [UserCardComponent, SearchBarComponent],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css',
})
export class UsersListComponent {
  usersList: any[] = users;

  receiveUserEmail(email: any) {
    if (!email) this.usersList = users;

    this.usersList = users.filter((user: any) => user.email.startsWith(email));
  }
}
