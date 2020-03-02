import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/model/menu-item.class';
import { User } from 'src/app/model/user.class';
import { SystemService } from 'src/app/service/system.service';
import { BaseComponent } from 'src/app/base/base.component';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent extends BaseComponent implements OnInit {
  user: User;
  navbarOpen = false;
  menuItems: MenuItem[] = [
    new MenuItem('Home','/home',"The Home Page"),
    new MenuItem('User','/user/list',"The User List"),
    new MenuItem('Vendor','/vendor/list',"The Vendor List"),
    new MenuItem('Product', '/product/list', "The Product List"),
    new MenuItem('Request', '/request/list', "The Purchase Request List"),
    // new MenuItem('Review','review',"Review list"),
    new MenuItem('About','/about',"The About Page")
  ];
  
  constructor(protected sysSvc: SystemService) {
    super(sysSvc);
    console.log('menu component constructor');
   }

  ngOnInit() {
    // console.log('menu component ngoninit');
    super.ngOnInit();
    // console.log("menuComponent logged in user = ",this.loggedInUser);
  }

  
}
  
