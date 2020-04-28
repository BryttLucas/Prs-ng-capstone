import { Component, OnInit } from '@angular/core';
import { Vendor } from 'src/app/model/vendor.class';
import { VendorService } from 'src/app/service/vendor.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseComponent } from 'src/app/base/base.component';
import { SystemService } from 'src/app/service/system.service';

@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent extends BaseComponent implements OnInit {
  id: number = 0;
  title: string = "Vendor Detail";
  vendor: Vendor = new Vendor;

  constructor(private venSvc: VendorService,
              protected sysSvc: SystemService,
              private router: Router, 
              private route: ActivatedRoute) {
                super(sysSvc);
               }
    

  ngOnInit() {
    super.ngOnInit();
    this.route.params.subscribe(parms => this.id = parms["id"]);
     this.venSvc.get(this.id).subscribe(jr => { 
       this.vendor = jr.data as Vendor;
       console.log(this.vendor);
     });
  }
  delete():void {
    this.venSvc.delete(this.vendor.id).subscribe(jr => {
      console.log("Vendor delete",jr);
      let error: string = jr.error;
      if (error != null) {
        console.log("Error deleting vendor: "+error);
      }
      this.router.navigateByUrl("vendor/list");
    });
  }
 
}