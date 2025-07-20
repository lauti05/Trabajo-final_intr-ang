import { Component } from '@angular/core';
import { Product } from '../product-list/product-list.component';
import { ModifyCartService } from '../../modify-cart.service';

@Component({
  selector: 'app-shopping-cart',
  imports: [],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})



export class ShoppingCartComponent {

  constructor(private modifyCart: ModifyCartService){
  }

  myProducts(){
    return this.modifyCart.getBuyList();
  }
  
  increaseQuantity(p: Product){
    this.modifyCart.addItem(p);
  }

  decreaseQuantity(p: Product){
    this.modifyCart.removeItem(p);
  }

  

}
