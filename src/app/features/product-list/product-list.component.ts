import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { ModifyCartService } from '../../modify-cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';


export interface Product{
    id: number;
    name: string;
    price: number;
    image: string;
}

@Component({
  selector: 'app-product-list',
  imports: [CurrencyPipe],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})

export class ProductListComponent {
  private localId: number = 1;
  
  constructor(private modifyCart: ModifyCartService, private snackBar: MatSnackBar) {}

  addToCart(p: Product){
    this.modifyCart.addItem(p);
    this.showNotification("Producto añadido al carrito")
  }

  products: Product[] = [
    {id: this.generateId(), name: "Flying hoverboard", price: 30.5, 
    image: '/img/Hoverboard.jpg'},

    {id: this.generateId(), name: 'Flux Capacitor', price: 149.99, image: '/img/flux-capacitor.jpg'},
  
    {id: this.generateId(), name: 'Grays sports almanac', price: 20.0, image: '/img/almanac.jpg'},

    {id: this.generateId(), name: "50's outfit", price: 15.99, image: '/img/marty-mcfly-1955-jacket.jpg'},

    {id: this.generateId(), name: 'Plutonium', price: 230.0, image: '/img/Plutonium_Case.jpg'}
  ];

  private generateId(){
    return this.localId++;
  }

  private showNotification(message: string) {
    this.snackBar.open(message, 'Cerrar', {
      duration: 5000, // Duración en milisegundos (3 segundos)
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });
  }

  
}

