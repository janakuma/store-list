import { Component, OnInit, HostListener } from '@angular/core';
import { ItemInterface } from './interfaces/item-interface';
import { items } from './mock-skin';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],    
})

export class AppComponent  { 
  
  lnb: string[];
  items: ItemInterface[];
  itemFilter: string = "all";
  isModalShow: boolean = false;  
  selectedItem: any;
  detailImg: string;
  thumIndex: number;  

  @HostListener('window:keydown', ['$event'])

  ngOnInit() {    
    this.items = items;    
  }  

  modalShow(item) {
    this.isModalShow = !this.isModalShow;
    this.selectedItem = item;
    this.detailImg = this.selectedItem.thum[0];    
  } 
  
  handleModalHide() {
    this.isModalShow = !this.isModalShow;
  }  

  handleClickItem(item) {
    this.itemFilter = item;
  }
}