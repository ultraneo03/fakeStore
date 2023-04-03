import { Component } from '@angular/core';
import { ProductService } from 'src/app/service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    console.log('obtener productos');
    this.productService.getProducts(true, 1, 200, '', 'name');
  }
}
