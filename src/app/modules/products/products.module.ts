import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';

@NgModule({
  declarations: [ProductsComponent],
  exports: [ProductsComponent],
  imports: [CommonModule, FormsModule, ProductsRoutingModule],
})
export class ProductsModule {}
