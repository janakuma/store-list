import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ItemInterface } from '../interfaces/item-interface';

@Component({
  selector: 'skin-item',
  templateUrl: './skin-item.component.html',
  styleUrls: ['./skin-item.component.scss']
})
export class SkinItemComponent implements OnInit {

  @Input() item: ItemInterface;
  @Input() itemFilter: string;
  
  @Output() isModalShow = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  viewSkinItem(itemFilter, item) {
    if( itemFilter === 'all' ) {
      return true;
    } else {
      return itemFilter === item.kinds;
    }    
  }

  repaceTierName(tier: number) {
    switch(tier) {
      case 1:
        return 'gold';

      case 2:
        return 'red';
      
      case 3:
        return 'blue';

      case 4:
        return 'green';

      case 5:
        return 'cyan';

      case 6:
        return 'pink';

      case 7:
        return 'bronze';      

      default:
        return 'basic';
    }
  }

  modalShow(item) {
    this.isModalShow.emit(item);    
    console.log(item)
  }
}