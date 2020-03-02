import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.class';
import { SystemService } from '../service/system.service';

@Component({
  template: ""
})
export class BaseComponent implements OnInit {
  loggedInUser: User = null;
  isAdmin: boolean;
  isReviewer: boolean;
  
  constructor(protected sysSvc: SystemService) { }

  ngOnInit() {
    // verify that the user is logged in
    this.sysSvc.checkLogin();
    // set the system user credentials in the current component
    this.loggedInUser = this.sysSvc.loggedInUser;
    this.isAdmin = this.sysSvc.isAdmin();
    this.isReviewer = this.sysSvc.isReviewer();

  }

}