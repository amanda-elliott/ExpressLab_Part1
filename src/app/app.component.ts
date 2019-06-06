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
      console.log(this.items);
      });
  }

  addNewItem(form) {
    this.cartService.addItem({ ...form.value}).subscribe(response => {
      this.items = response;
    });
  }

  deleteItem(id) {
    this.cartService.deleteItem(id).subscribe(response => {
      this.items = response;
    });
  }

  updateItem(item) {
    this.cartService.updateItem(item).subscribe(response => {
      this.items = response;
    });
  }

  toggleForm(index) {
    this.items[index].beingUpdated = !this.items[index].beingUpdated;
  }

}
 