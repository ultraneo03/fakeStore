import { Component } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  providers: [CarouselConfig],
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
      imageAlt: 'Image 1',
      title: 'Title image 1',
      description: 'Description of the image',
    },
    {
      image: 'https://picsum.photos/id/1015/1000/600/',
      imageAlt: 'Image 2',
      title: 'Title Image 2',
      description: 'Descripción de la imagen 2',
    },
    {
      image: 'https://picsum.photos/id/1019/1000/600/',
      imageAlt: 'Image 3',
      title: 'Title Image 3',
      description: 'Description of the image 3',
    },
  ];
}
