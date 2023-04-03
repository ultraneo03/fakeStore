import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
    path: 'productos',
    loadChildren: () => import('./modules').then((m) => m.ProductsComponent),
  },
  {
    path: 'productos/categoria/:id',
    loadChildren: () => import('./modules').then((m) => m.ProductsComponent),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
