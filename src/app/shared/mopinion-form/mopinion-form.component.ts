import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mopinion-form',
  templateUrl: './mopinion-form.component.html',
  styleUrls: ['./mopinion-form.component.scss']
})
export class MopinionFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Call forceParse
    try {
      // @ts-ignore
      Pastease.forceParse();
    }catch(err){
      console.warn('Pastease could not parse. Please check if Pastease was loaded on the page.')
    }
  }

}
