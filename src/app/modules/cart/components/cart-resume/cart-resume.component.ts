import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/service';

@Component({
  selector: 'app-cart-resume',
  templateUrl: './cart-resume.component.html',
  styleUrls: ['./cart-resume.component.css'],
})
export class CartResumeComponent {
  public products: any = [];
  public grandTotal: number = 0;

  constructor(private cartService: CartService, private router: Router) {
    this.cartService.getProducts().subscribe((res) => {
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    });
  }

  ngOnInit(): void {}
  removeItem(item: any) {
    this.cartService.removeCartItem(item);
  }
  emptycart() {
    this.cartService.removeAllCart();
  }

  checkoutCart() {
    if (this.products.length > 0) {
      this.router.navigate(['checkout']);
    }
  }
}
