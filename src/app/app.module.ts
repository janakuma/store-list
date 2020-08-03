import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SkinItemComponent } from './skin-item/skin-item.component';
import { SkinLnbComponent } from './skin-lnb/skin-lnb.component';
import { SkinModalComponent } from './skin-modal/skin-modal.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, SkinItemComponent, SkinLnbComponent, SkinModalComponent ],
  bootstrap:    [ AppComponent ],
  providers: []
})
export class AppModule { }
