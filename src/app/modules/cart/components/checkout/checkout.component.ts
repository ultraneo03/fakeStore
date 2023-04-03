import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
  providers: [ToastrService],
})
export class CheckoutComponent {
  public soldProducts: any = [];
  public grandTotal: number = 0;
  showCongratulations: boolean = false;

  constructor(private cartService: CartService, private toastr: ToastrService) {
    this.cartService.getProducts().subscribe((res) => {
      if (this.soldProducts.length == 0) {
        this.soldProducts = res;
        this.grandTotal = this.cartService.getTotalPrice();
        this.showSuccess();
        this.cartService.removeAllCart();
      }
    });
  }

  showSuccess() {
    if (this.soldProducts.length > 0) {
      this.toastr.success(
        'Thank you for shopping in our store!',
        'Successful purchase'
      );
    }
  }
}
