import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.class';
import { UserService } from 'src/app/service/user.service';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  title: string = "User Edit";
  submitBtnTitle = "Save";
  user: User = new User();
  id: number = 0;


  constructor(private userSvc: UserService,
              private router: Router,
              private route: ActivatedRoute) {}
            
 
    ngOnInit() {
      //get the user id from the url and calling service for user
      this.route.params.subscribe(parms => this.id = parms["id"]);
       this.userSvc.get(this.id).subscribe(jr => { 
         this.user = jr.data as User;
         console.log(this.user);
       });
    }
    save(): void {
      this.userSvc.edit(this.user).subscribe(jr =>{
        let errs: string = jr.error;
        if (errs!=null) {
          console.log("Error creating user."+ errs);
        }
       this.router.navigateByUrl("user/list");
      });
    }
    delete() {
      this.userSvc.delete(this.id).subscribe(jr => {
        console.log("user delete jr:",jr);
        if (jr.error != null) {
          console.log("Error deleting user: "+jr.error);
        }
        this.router.navigateByUrl("user/list");
    });
  }
   
}