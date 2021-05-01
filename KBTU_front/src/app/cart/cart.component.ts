import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: any = [];


  constructor(
    private cartService: CartService,
  ) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }

  // removeItem(name) {
  //   for ( let i = 0; i < this.items.length; i++) {
  //     if( this.items[i].name === name )
  //       this.items.splice(i--, 1);
  //   }
  // }

}
