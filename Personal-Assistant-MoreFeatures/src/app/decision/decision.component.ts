import { Component, OnInit } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-decision',
  templateUrl: './decision.component.html',
  styleUrls: ['./decision.component.css']
})
export class DecisionComponent implements OnInit {

  action_list: string[] = [];

  assistance_list: string[] = [];
   


  task: Task = {
    id: 1,
    data: ''
  };
  question = "Will i enjoy this?";

  Yes()
  {
    if(this.question == "Will i enjoy this?")
    {
      this.action_list.push(this.task.data);
      this.question = "Item put to action list!";
    }

    else if(this.question == "Is it income generating?")
    {
      this.question = "Can it be outsourced?";
    }

    else if(this.question == "Can it be outsourced?")
    {
      this.assistance_list.push(this.task.data);
      this.question = "Item put to Request Assistance list!";
    }

    else if(this.question == "Obligation?")
    {
      this.question = "Can it be outsourced?";
    }
  }

  No()
  {
    if(this.question == "Will i enjoy this?")
    {
      this.question = "Is it income generating?";
    }

    else if(this.question == "Can it be outsourced?")
    {
      this.action_list.push(this.task.data);
      this.question = "Item put to Action list!";
      
    }

    else if(this.question == "Is it income generating?")
    {
      this.question = "Obligation?";
    }

    else if(this.question == "Obligation?")
    {
      this.question = "Cool! You can eliminate this task";
    }


  }

  Reset()
  {
    this.question = "Will i enjoy this?";
    this.task.data = "";

  }

  constructor() { }

  ngOnInit(): void {
  }

}
