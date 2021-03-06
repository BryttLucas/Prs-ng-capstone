
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RefreshComponentComponent } from './core/refresh-component/refresh-component.component';

import { UserLoginComponent } from './feature/user/user-login/user-login.component';
import { UserListComponent } from './feature/user/user-list/user-list.component';
import { UserCreateComponent } from './feature/user/user-create/user-create.component';
import { UserDetailComponent } from './feature/user/user-detail/user-detail.component';
import { UserEditComponent } from './feature/user/user-edit/user-edit.component';

import { VendorListComponent } from './feature/vendor/vendor-list/vendor-list.component';
import { VendorCreateComponent } from './feature/vendor/vendor-create/vendor-create.component';
import { VendorDetailComponent } from './feature/vendor/vendor-detail/vendor-detail.component';
import { VendorEditComponent } from './feature/vendor/vendor-edit/vendor-edit.component';

import { ProductListComponent } from './feature/product/product-list/product-list.component';
import { ProductCreateComponent } from './feature/product/product-create/product-create.component';
import { ProductDetailComponent } from './feature/product/product-detail/product-detail.component';
import { ProductEditComponent } from './feature/product/product-edit/product-edit.component';

import { RequestListComponent } from './feature/request/request-list/request-list.component';
import { RequestReviewComponent } from './feature/request/request-review/request-review.component';
import { RequestEditComponent } from './feature/request/request-edit/request-edit.component';
import { RequestCreateComponent } from './feature/request/request-create/request-create.component';
import { RequestDetailComponent } from './feature/request/request-detail/request-detail.component';
import { RequestApproveComponent } from './feature/request/request-approve/request-approve.component';
import { RequestAddLinesComponent } from './feature/request/request-add-lines/request-add-lines.component';
import { EditLineItemsComponent } from './feature/request/edit-line-items/edit-line-items.component';

import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';









const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full"},
    { path: 'user/login', component: UserLoginComponent },
    { path: "user/list", component: UserListComponent},
    { path: "user/create", component: UserCreateComponent},
    { path: "user/detail/:id", component: UserDetailComponent},
    { path: "user/edit/:id", component: UserEditComponent},
    { path: "vendor/list", component: VendorListComponent},
    { path: "vendor/create", component: VendorCreateComponent},
    { path: "vendor/detail/:id", component: VendorDetailComponent},
    { path: "vendor/edit/:id", component: VendorEditComponent},
    { path: "product/list", component: ProductListComponent},
    { path: "product/create", component: ProductCreateComponent},
    { path: "product/detail/:id", component: ProductDetailComponent},
    { path: "product/edit/:id", component: ProductEditComponent},
    { path: "request/list", component:RequestListComponent},
    { path: "request/review", component:RequestReviewComponent},
    { path: "request/edit/:id", component:RequestEditComponent},
    { path: "request/detail/:id", component:RequestDetailComponent},
    { path: "request/create", component:RequestCreateComponent},
    { path: "request/approve/:id", component:RequestApproveComponent},
    { path: "request/lineitems/:id", component:RequestAddLinesComponent},
    { path: "request/lineitems/edit/:id", component:EditLineItemsComponent},
    { path: "refresh/:id", component:RefreshComponentComponent},
    { path: "home", component:HomeComponent},
    { path: "about", component:AboutComponent},
    { path: "**", component:HomeComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
