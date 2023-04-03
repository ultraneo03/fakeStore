import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { ProductDetailRoutingModule } from './product-detail-routing.module';
import { ProductDetailComponent } from './product-detail.component';
import { DetailComponent } from './components/detail/detail.component';

@NgModule({
  declarations: [ProductDetailComponent, DetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    CarouselModule.forRoot(),
    ProductDetailRoutingModule,
  ],
})
export class ProductDetailModule {}
