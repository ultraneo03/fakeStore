import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartResumeComponent } from './components/cart-resume/cart-resume.component';
import { CartComponent } from './cart.component';
import { CartRoutingModule } from './cart-routing.module';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [CartComponent, CartResumeComponent, CheckoutComponent],
  imports: [
    CommonModule,
    FormsModule,
    CartRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [ToastrModule],
})
export class CartModule {}
