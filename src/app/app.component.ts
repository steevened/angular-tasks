import { Component } from '@angular/core';
import { Item } from './item';

@Component({
  selector: 'app-root',
  // metadata to specify the HTML template and styles that belongs to the component
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Tasks App';

  filter: 'all' | 'active' | 'done' = 'all';

  allItems: Item[] = [
    {
      description: 'Buy milk',
      done: false,
    },
    {
      description: 'Save the world',
      done: false,
    },
    {
      description: 'Feed the cat',
      done: true,
    },
  ];

  get items() {
    if (this.filter === 'all') {
      return this.allItems;
    }

    return this.allItems.filter((item) => {
      return this.filter === 'done' ? item.done : !item.done;
    });
  }

  addItem(description: string) {
    this.allItems.unshift({
      description,
      done: false,
    });
  }

  remove(item: Item) {
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }
}
