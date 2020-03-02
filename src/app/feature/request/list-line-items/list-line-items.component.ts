import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/base/base.component';
import { LineItem } from 'src/app/model/line-item.class';
import { ActivatedRoute, Router } from '@angular/router';
import { LineService } from 'src/app/service/line.items.service';
import { SystemService } from 'src/app/service/system.service';
import { RequestService } from 'src/app/service/request.service';
import { RequestDetailComponent } from '../request-detail/request-detail.component';
import {Request} from 'src/app/model/request.class';

@Component({
  selector: 'app-list-line-items',
  templateUrl: './list-line-items.component.html',
  styleUrls: ['./list-line-items.component.css']
})
export class ListLineItemsComponent extends BaseComponent implements OnInit {
  id: number;
  title: string = "Items on Request";
  lineItems: LineItem[];
  lineItemId: number;
  request: Request;
  delBool: boolean = false;


  constructor(private route: ActivatedRoute,
              protected router: Router,
              protected lineSvc: LineService,
              protected sysSvc: SystemService,
              protected reqSvc: RequestService) {
              super(sysSvc);
  }
  ngOnInit() {
    super.ngOnInit();
    this.route.params.subscribe(parms => this.id = parms["id"]);
    this.reqSvc.get(this.id).subscribe(jr => {
      this.request = jr.data as Request;
    });
    this.lineSvc.listLinesByRequest(this.id).subscribe(jr => {
      this.lineItems = jr.data;
    });
  }

  deleteAction(lineId: number): void {
    this.delBool = true;
    this.lineItemId = lineId;
  
  }
  deleteLineItem(id: number):void {
    this.lineItemId = id;
    this.lineSvc.delete(this.lineItemId).subscribe(jr => {
      let error: string = jr.error;
      if(error!=null){
        console.log(error);
      }
    // super.ngOnInit();
      this.router.navigateByUrl("/refresh/"+this.id);
    });
  }

}
    