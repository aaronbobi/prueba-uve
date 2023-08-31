import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  users:any;
  filteredUsers:any;
  searchInput:any;

  constructor(
    private usersService: UsersService
  ) {
    this.getUsers();
  }

  getUsers(){
    this.usersService.getUsers().subscribe(res=>{
      this.users = res;
      this.filteredUsers = this.users;
    });
  }

  filterUsers() {
    if (this.searchInput.trim() === '') {
      this.filteredUsers = this.users;
    } else {
      this.filteredUsers = this.users.filter((user:any) => {
        return (
          user.name.toLowerCase().includes(this.searchInput.toLowerCase()) ||
          user.email.toLowerCase().includes(this.searchInput.toLowerCase()) ||
          user.username.toLowerCase().includes(this.searchInput.toLowerCase()) ||
          user.phone.includes(this.searchInput)
        );
      });
    }
  }

  

  

}
