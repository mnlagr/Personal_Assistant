import { Component, OnInit } from '@angular/core';

import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checker',
  templateUrl: './checker.component.html',
  styleUrls: ['./checker.component.css']
})
export class CheckerComponent implements OnInit {

sleep_toggle = true;
enableDisableRule_sleep_toggle(job: any) {
  this.sleep_toggle  = !this.sleep_toggle ;
}

workout_toggle = true;
enableDisableRule_workout_toggle(job: any) {
  this.workout_toggle  = !this.workout_toggle ;
}

family_toggle = true;
enableDisableRule_family_toggle(job: any) {
  this.family_toggle  = !this.family_toggle ;
}

meditation_toggle = true;
enableDisableRule_meditation_toggle(job: any) {
  this.meditation_toggle  = !this.meditation_toggle ;
}

gratitude_toggle = true;
enableDisableRule_gratitude_toggle(job: any) {
  this.gratitude_toggle  = !this.gratitude_toggle ;
}

pet_toggle = true;
enableDisableRule_pet_toggle(job: any) {
  this.pet_toggle  = !this.pet_toggle ;
}

walk_toggle = true;
enableDisableRule_walk_toggle(job: any) {
  this.walk_toggle  = !this.walk_toggle ;
}


count = 0;
feedback_text = "";
Feedback()
{
  

  if(this.sleep_toggle == false)
  this.count = this.count+1;

  if(this.workout_toggle == false)
  this.count = this.count+1;

  if(this.meditation_toggle == false)
  this.count = this.count+1;

  if(this.family_toggle == false)
  this.count = this.count+1;

  if(this.walk_toggle == false)
  this.count = this.count+1;

  if(this.pet_toggle == false)
  this.count = this.count+1;

  if(this.gratitude_toggle == false)
  this.count = this.count+1;

  if(this.count < 4)
  this.feedback_text = "Please pay more attention to your health!";
  
  
  else if(this.count < 6)
  this.feedback_text = "You are paying good attention on health. Keep Going!";

  else
  this.feedback_text = "Amazing!"


}


  constructor() {}

  ngOnInit() {
  

  }
}
