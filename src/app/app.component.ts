import { Component } from '@angular/core';
import { CartService } from './cart.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Express-Lab';

  items: any;

  constructor(private cartService: CartService) {

    this.cartService.getAllItems().subscribe(response => {
      this.items = response;
    });
  }

  addNewItem(newItem) {
    this.cartService.addItem(newItem).subscribe(response => {
      this.items = response;
    });
  }

  deleteItem(id) {
    this.cartService.deleteItem(id).subscribe(response => {
      this.items = response;
    });
  }

  updateItem(id, newItem) {
    this.cartService.updateItem(id, newItem).subscribe(response => {
      this.items = response;
    });
  }

}
 