import { Component, OnInit, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { ContainerComponent, DraggableComponent } from 'ngx-smooth-dnd';
import { applyDrag } from './utils';


@Component({
  selector: 'app-prioritize',
  templateUrl: './prioritize.component.html',
  styleUrls: ['./prioritize.component.css']
})
export class PrioritizeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  items = [
    { id: 1, data: "", class: "block" },
    { id: 2, data: "",class: "block" },
    { id: 3, data: "", class: "block" },
    { id: 4, data: "", class: "block" },
    { id: 5, data: "", class: "block" },
    { id: 6, data: "", class: "block" }
  ]
 
  
  onDrop(dropResult: any) {
    this.items = applyDrag(this.items, dropResult);
  }
  display()
  {
    console.log(this.items[1].id + this.items[1].data);
    console.log(this.items[2].id + this.items[2].data);
    console.log(this.items[3].id + this.items[3].data);
    console.log(this.items[4].id + this.items[4].data);
  }

}
