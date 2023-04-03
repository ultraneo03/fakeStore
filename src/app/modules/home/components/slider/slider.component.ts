import { Component } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  providers: [CarouselConfig]
})
export class SliderComponent {

  constructor(config: CarouselConfig) {
    config.interval = 15000; // tiempo en milisegundos entre diapositivas
    config.noWrap = false;
    config.noPause = true;
    config.pauseOnFocus = false;
  }

  slides = [
    {
      image: 'https://picsum.photos/id/1018/1000/600/',
      imageAlt: 'Imagen 1',
      title: 'Título de la imagen 1',
      description: 'Descripción de la imagen 1'
    },
    {
      image: 'https://picsum.photos/id/1015/1000/600/',
      imageAlt: 'Imagen 2',
      title: 'Título de la imagen 2',
      description: 'Descripción de la imagen 2'
    },
    {
      image: 'https://picsum.photos/id/1019/1000/600/',
      imageAlt: 'Imagen 3',
      title: 'Título de la imagen 3',
      description: 'Descripción de la imagen 3'
    }
  ];
  
}
