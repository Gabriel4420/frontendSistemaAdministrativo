import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { CreateComponent } from './components/product/create/create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './views/home/home.component';
import {ProductsComponent} from './views/products/products.component'
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
const routes: Routes = [{
  path: "",
  component: HomeComponent,
}, {
  path:'products',
  component:ProductsComponent
},{
  path: 'products/create',
  component: CreateComponent
},{
  path: "products/update/:id",
  component: ProductUpdateComponent
},{
  path: "products/delete/:id",
  component: ProductDeleteComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
