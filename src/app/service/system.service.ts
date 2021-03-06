import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.class';

@Injectable({
  providedIn: 'root'
})
export class SystemService {
  loggedInUser: User = null;

  constructor(private router: Router) { 
  }

  isAdmin(): boolean { 
    return (this.loggedInUser == null) ? false : this.loggedInUser.admin;
  }
  isReviewer(): boolean { 
    return (this.loggedInUser == null) ? false : this.loggedInUser.reviewer;
  }

  checkLogin(): void {
    if(this.loggedInUser == null) {
      this.router.navigateByUrl("/users/login");
    }
  }
  
}
