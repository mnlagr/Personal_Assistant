import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {

 
  form1 = new FormGroup({
    sleep: new FormControl(),
    workout: new FormControl(),
    family: new FormControl(),
    meditation: new FormControl(),
    gratitude: new FormControl(),
  });

  form2 = new FormGroup({
    walk: new FormControl(),
    breakfast: new FormControl(),
    water: new FormControl(),
    eye: new FormControl(),
    pet: new FormControl(),
  });
  
  
 
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form1 = this.formBuilder.group({
      sleep: [null],
      workout: [null],
      family: [null],
      meditation: [null],
      gratitude: [null],

    });

    this.form2 = this.formBuilder.group({
      walk: [null],
      breakfast: [null],
      water: [null],
      eye: [null],
      pet: [null],

    });
  }

}
