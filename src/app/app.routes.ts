import { Routes } from '@angular/router';
import { ShoppingCartComponent } from './features/shopping-cart/shopping-cart.component';
import { AppComponent } from './app.component';
import { ProductListComponent } from './features/product-list/product-list.component';

export const routes: Routes = [
    {path: '', component: ProductListComponent},
    
    {path: 'cart', component: ShoppingCartComponent, pathMatch: 'full'}
];
