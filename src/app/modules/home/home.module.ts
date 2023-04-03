import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { HomeRoutingModule } from './home-routing.module';
import { SliderComponent } from './components/slider/slider.component';
import { HomeComponent } from './home.component';
import { TopRatedComponent } from './components/top-rated/top-rated.component';
import { ProductsModule } from '../products';

@NgModule({
  declarations: [HomeComponent, SliderComponent, TopRatedComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CarouselModule.forRoot(),
    ProductsModule,
  ],
})
export class HomeModule {}
