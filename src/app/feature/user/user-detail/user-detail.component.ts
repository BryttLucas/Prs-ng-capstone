import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.class';
import { UserService } from 'src/app/service/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SystemService } from 'src/app/service/system.service';
import { BaseComponent } from 'src/app/base/base.component';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent extends BaseComponent  implements OnInit {
  title: string = "User Detail";
  user: User = new User;
  id: number;

  constructor(private userSvc: UserService,
              protected sysSvc:SystemService,
              private router: Router, 
              private route: ActivatedRoute) {
               super(sysSvc);
               }
    

  ngOnInit() {
    super.ngOnInit();
    this.route.params.subscribe(parms => this.id = parms["id"]);
     this.userSvc.get(this.id).subscribe(jr => { 
       this.user = jr.data as User;
     });
  }
  delete() {
    this.userSvc.delete(this.id).subscribe(jr => {
      console.log("user delete jr:",jr);
      if (jr.error != null) {
        console.log("Error deleting user: "+jr.error);
      }
      this.router.navigateByUrl("users/list");
    });
  }
 
}

