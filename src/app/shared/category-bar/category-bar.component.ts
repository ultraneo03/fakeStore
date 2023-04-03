import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-category-bar',
  templateUrl: './category-bar.component.html',
  styleUrls: ['./category-bar.component.css'],
  imports: [CommonModule],
})
export class CategoryBarComponent {
  constructor(private router: Router) {}

  categories = [
    { id: 1, name: 'Ropa' },
    { id: 2, name: 'Electrónicos' },
    { id: 3, name: 'Hogar' },
    { id: 4, name: 'Deportes' },
    { id: 5, name: 'Juguetes' },
    { id: 0, name: 'All' },
  ];

  goToCategory(id: number) {
    this.router.navigate(['/productos/categoria', id]);
  }
}
