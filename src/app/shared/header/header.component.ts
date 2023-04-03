import { Component } from '@angular/core';
import { CartService } from 'src/app/service';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  totalItem: number = 0;
  public searchTerm: string = '';
  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((res: string | any[]) => {
      // console.log(res)
      this.totalItem = res.length;
    });
  }

  goToByName(route: string): void {
    this.router.navigate([route]);
  }
}
