import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  CartRoutingModule,
  HomeRoutingModule,
  ProductDetailRoutingModule,
  ProductsRoutingModule,
} from './modules';

/* This is the routing configuration for the application. */
const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () => import('./modules').then((m) => m.HomeModule),
  },
  {
    path: 'products',
    loadChildren: () => import('./modules').then((m) => m.ProductsModule),
  },
  {
    path: 'product-detail/:id',
    loadChildren: () => import('./modules').then((m) => m.ProductDetailModule),
  },
  {
    path: 'cart',
    loadChildren: () => import('./modules').then((m) => m.CartModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ProductsRoutingModule,
    ProductDetailRoutingModule,
    CartRoutingModule,
    HomeRoutingModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
