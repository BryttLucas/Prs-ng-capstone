import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/model/menu-item.class';
import { SystemService } from 'src/app/service/system.service';
import { BaseComponent } from 'src/app/base/base.component';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent extends BaseComponent implements OnInit {

  menuItems: MenuItem[] = [
    new MenuItem('Home','/home',"The Home Page"),
    new MenuItem('About','/about',"The About Page"),
    new MenuItem('User','/user/list',"The User List"),
    new MenuItem('Vendor','/vendor/list',"The Vendor List"),
    new MenuItem('Product', '/product/list', "The Product List"),
    new MenuItem('Request', '/request/list', "The Purchase Request List")
   
  
  ];
  
  constructor(protected sysSvc: SystemService) {
    super(sysSvc);
  
   }

  ngOnInit() {
    // console.log('menuComponent ngoninit');
    super.ngOnInit();
    // console.log("menuComponent logged in user = ",this.loggedInUser);
  }

  
}
  
