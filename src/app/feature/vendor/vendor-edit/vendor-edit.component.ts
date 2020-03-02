import { Component, OnInit } from '@angular/core';
import { Vendor } from 'src/app/model/vendor.class';
import { VendorService } from 'src/app/service/vendor.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent implements OnInit {
  id:number = 0;
  title: string = "Vendor Edit";
  submitBtnTitle: string = "Save";
  vendor: Vendor = new Vendor();
  
  constructor(private venSvc: VendorService,
              private router: Router,
              private route: ActivatedRoute) {}
            
    ngOnInit() {
      //get the user id from the url and calling service for vendor
      this.route.params.subscribe(parms => this.id = parms["id"]);
       this.venSvc.get(this.id).subscribe(jr => { 
         this.vendor = jr.data as Vendor;
         console.log(this.vendor);
       });
    }
    save(): void {
      this.venSvc.edit(this.vendor).subscribe(jr =>{
        let error: string = jr.error;
        if (error!=null) {
          console.log("Error creating vendor."+ error);
        }
       this.router.navigateByUrl("vendor/list");
      });
    }
    delete() {
      this.venSvc.delete(this.id).subscribe(jr => {
        console.log("vendor delete jr:",jr);
        if (jr.error != null) {
          console.log("Error deleting vendor: "+jr.error);
        }
        this.router.navigateByUrl("vendor/list");
    });
  }
}