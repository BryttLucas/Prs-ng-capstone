import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.class';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';
import { BaseComponent } from 'src/app/base/base.component';
import { SystemService } from 'src/app/service/system.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent extends BaseComponent implements OnInit {
  message: string = "";
  user: User = new User();

  constructor(private userSvc: UserService,
              protected sysSvc: SystemService,
              private router: Router) {
    super(sysSvc);
  }

  ngOnInit() {
   
  }

  login() {
    console.log("login called for user:", this.user);
    this.userSvc.login(this.user)
      .subscribe(jr => {
        console.log("jr:", jr);
        if (jr.error == null) {
          if (jr.data == null) {
            this.message = "Invalid Username/Password combo.  Retry";
          }
          else {
            this.user = jr.data as User;
            this.sysSvc.loggedInUser = this.user;
            console.log('logged in user = ',this.user);
            this.router.navigateByUrl('/users/list');
          }
        }
        else {
          this.message = "Invalid Username/Password combo.  Retry";
        }
      });
  }

}
