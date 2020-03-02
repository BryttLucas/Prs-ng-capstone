import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.class';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  title: string = "User Create";
  submitBtnTitle: string = "Create"
  user: User = new User();
 
  constructor(private userSvc: UserService,
              private router: Router) {}
        
  ngOnInit() {
    
  }
  save(){
    this.userSvc.create(this.user).subscribe(jr =>{
      let errs: string = jr.error;
      if (errs!=null) {
        console.log("Error creating user."+ errs);
      }
     this.router.navigateByUrl("user/list");
    });
  }
 
}