import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, ProductCart } from 'src/app/models';
import { CartService } from 'src/app/service';
import { LocalStorageService } from 'src/app/service/local-storage.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent {
  product?: Product;
  productCard?: ProductCart;
  products: Product[] = [];
  quantity: number = 1;

  constructor(
    private route: ActivatedRoute,
    private productLocalService: LocalStorageService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      const id = Number(idParam);
      this.products = this.productLocalService.getProducts();

      if (id) {
        this.product = this.products.find((x) => x.id == id);
      }
    }
  }

  addToCart(id: number): void {
    // Aquí se puede agregar el producto al carrito de compras
    if (this.product) {
      this.productCard = {
        id: this.product.id,
        name: this.product.name,
        description: this.product.description,
        origin: this.product.origin,
        qty: this.quantity,
        price: this.product.price,
        category: this.product.category,
        image: this.product.image,
        rating: this.product.rating,
        total: this.product.price * this.quantity,
      };
      this.cartService.addtoCart(this.productCard);
    }
  }
}
