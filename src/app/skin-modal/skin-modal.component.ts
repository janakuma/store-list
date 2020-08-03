import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ItemInterface } from '../interfaces/item-interface';

@Component({
  selector: 'skin-modal',
  templateUrl: './skin-modal.component.html',
  styleUrls: ['./skin-modal.component.scss']
})
export class SkinModalComponent implements OnInit {  
  @Input() isModalShow: boolean;
  @Input() selectedItem: ItemInterface;  
  @Input() detailImg: string;

  @Output() onClickModalHide = new EventEmitter<boolean>();  
  
  thumIndex: number = 0;    
  
  constructor() {}

  ngOnInit() {}

  onSlide(direction) {        
    const img_max = this.selectedItem.thum.length - 1;
    const img_count = direction === 'left' ? this.thumIndex - 1 : this.thumIndex + 1;
    this.thumIndex = img_count;    

    if(img_count < 0) {      
      this.thumIndex = img_max;
    } else if(img_count > img_max){
      this.thumIndex = 0;      
    }
  }
  

  showViewThum(thum, i) {    
    this.detailImg = thum;
    this.thumIndex = i;
    //console.log(this.selectedItem.thum.indexOf(thum));
  }
  
  handleModalHide() {
    this.onClickModalHide.emit();
  }
}