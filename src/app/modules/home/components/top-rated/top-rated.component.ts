import { Component } from '@angular/core';
import { Product } from 'src/app/models';
import { LocalStorageService } from 'src/app/service/local-storage.service';

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.css'],
})
export class TopRatedComponent {
  topRatedProducts: Product[] = [];

  constructor(private productService: LocalStorageService) {}

  ngOnInit(): void {
    this.topRatedProducts = this.productService.getTopRatedProducts();
  }
}
