import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'skin-lnb',
  templateUrl: './skin-lnb.component.html',
  styleUrls: ['./skin-lnb.component.scss']
})

export class SkinLnbComponent implements OnInit {
  @Input() itemFilter:string; 
  @Output() onClickItem = new EventEmitter<string>();

  lnb: string[];  
  constructor() { }

  ngOnInit() {
    this.lnb = ['all', 'gun', 'sword', 'globe', 'shoes', 'helmet'];    
  }

  itemShow(itemFilter) {
    this.onClickItem.emit(itemFilter); 
  }  
}