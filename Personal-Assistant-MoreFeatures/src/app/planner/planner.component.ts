import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContainerComponent, DraggableComponent } from 'ngx-smooth-dnd';
import { applyDrag } from './utils';
import { Time } from '../time';
import { Times } from '../all-times';


@Component({
  selector: 'app-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.css']
})
export class PlannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  times = Times;
  
toggle_twelveam = true;
status_twelveam = ''; 
enableDisableRule_twelveam(job: any) {
    this.toggle_twelveam = !this.toggle_twelveam;
    this.status_twelveam = this.toggle_twelveam ? '' : '   Meeting';
}

toggle_oneam = true;
status_oneam = ''; 
enableDisableRule_oneam(job: any) {
  this.toggle_oneam = !this.toggle_oneam;
  this.status_oneam = this.toggle_oneam ? '' : '   Meeting';
}

toggle_twoam = true;
status_twoam = ''; 
enableDisableRule_twoam(job: any) {
    this.toggle_twoam = !this.toggle_twoam;
    this.status_twoam = this.toggle_twoam ? '' : '   Meeting';
}

toggle_threeam = true;
status_threeam = ''; 
enableDisableRule_threeam(job: any) {
  this.toggle_threeam = !this.toggle_threeam;
  this.status_threeam = this.toggle_threeam ? '' : '   Meeting';
}

toggle_fouram = true;
status_fouram = ''; 
enableDisableRule_fouram(job: any) {
    this.toggle_fouram = !this.toggle_fouram;
    this.status_fouram = this.toggle_fouram ? '' : '   Meeting';
}

toggle_fiveam= true;
status_fiveam = ''; 
enableDisableRule_fiveam(job: any) {
  this.toggle_fiveam = !this.toggle_fiveam;
  this.status_fiveam = this.toggle_fiveam ? '' : '   Meeting';
}

toggle_sixam = true;
status_sixam = ''; 
enableDisableRule_sixam(job: any) {
    this.toggle_sixam= !this.toggle_sixam;
    this.status_sixam = this.toggle_sixam ? '' : '   Meeting';
}

toggle_sevenam = true;
status_sevenam = ''; 
enableDisableRule_sevenam(job: any) {
  this.toggle_sevenam = !this.toggle_sevenam;
  this.status_sevenam= this.toggle_sevenam ? '' : '   Meeting';
}

toggle_eightam = true;
status_eightam = ''; 
enableDisableRule_eightam(job: any) {
    this.toggle_eightam = !this.toggle_eightam;
    this.status_eightam= this.toggle_eightam ? '' : '   Meeting';
}

toggle_nineam = true;
status_nineam = ''; 
enableDisableRule_nineam(job: any) {
  this.toggle_nineam = !this.toggle_nineam;
  this.status_nineam = this.toggle_nineam ? '' : '   Meeting';
}

toggle_tenam = true;
status_tenam = ''; 
enableDisableRule_tenam(job: any) {
    this.toggle_tenam = !this.toggle_tenam;
    this.status_tenam = this.toggle_tenam? '' : '   Meeting';
}

toggle_elevenam = true;
status_elevenam = ''; 
enableDisableRule_elevenam(job: any) {
  this.toggle_elevenam = !this.toggle_elevenam;
  this.status_elevenam= this.toggle_elevenam ? '' : '   Meeting';
}



toggle_twelvepm = true;
status_twelvepm = ''; 
enableDisableRule_twelvepm(job: any) {
    this.toggle_twelvepm = !this.toggle_twelvepm;
    this.status_twelvepm = this.toggle_twelvepm ? '' : '   Meeting';
}

toggle_onepm = true;
status_onepm = ''; 
enableDisableRule_onepm(job: any) {
  this.toggle_onepm = !this.toggle_onepm;
  this.status_onepm = this.toggle_onepm ? '' : '   Meeting';
}

toggle_twopm = true;
status_twopm = ''; 
enableDisableRule_twopm(job: any) {
    this.toggle_twopm = !this.toggle_twopm;
    this.status_twopm = this.toggle_twopm ? '' : '   Meeting';
}

toggle_threepm = true;
status_threepm = ''; 
enableDisableRule_threepm(job: any) {
  this.toggle_threepm = !this.toggle_threepm;
  this.status_threepm = this.toggle_threepm ? '' : '   Meeting';
}

toggle_fourpm= true;
status_fourpm = ''; 
enableDisableRule_fourpm(job: any) {
    this.toggle_fourpm = !this.toggle_fourpm;
    this.status_fourpm = this.toggle_fourpm ? '' : '   Meeting';
}

toggle_fivepm= true;
status_fivepm = ''; 
enableDisableRule_fivepm(job: any) {
  this.toggle_fivepm = !this.toggle_fivepm;
  this.status_fivepm = this.toggle_fivepm ? '' : '   Meeting';
}

toggle_sixpm = true;
status_sixpm = ''; 
enableDisableRule_sixpm(job: any) {
    this.toggle_sixpm= !this.toggle_sixpm;
    this.status_sixpm = this.toggle_sixpm ? '' : '   Meeting';
}

toggle_sevenpm = true;
status_sevenpm = ''; 
enableDisableRule_sevenpm(job: any) {
  this.toggle_sevenpm = !this.toggle_sevenpm;
  this.status_sevenpm= this.toggle_sevenpm ? '' : '   Meeting';
}

toggle_eightpm = true;
status_eightpm = ''; 
enableDisableRule_eightpm(job: any) {
    this.toggle_eightpm = !this.toggle_eightpm;
    this.status_eightpm= this.toggle_eightpm ? '' : '   Meeting';
}

toggle_ninepm= true;
status_ninepm = ''; 
enableDisableRule_ninepm(job: any) {
  this.toggle_ninepm = !this.toggle_ninepm;
  this.status_ninepm = this.toggle_ninepm ? '' : '   Meeting';
}

toggle_tenpm = true;
status_tenpm = ''; 
enableDisableRule_tenpm(job: any) {
    this.toggle_tenpm = !this.toggle_tenpm;
    this.status_tenpm = this.toggle_tenpm? '' : '   Meeting';
}

toggle_elevenpm = true;
status_elevenpm = ''; 
enableDisableRule_elevenpm(job: any) {
  this.toggle_elevenpm = !this.toggle_elevenpm;
  this.status_elevenpm= this.toggle_elevenpm ? '' : '   Meeting';
}




}
