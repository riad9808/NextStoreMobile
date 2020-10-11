import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import { ProductsComponent } from './products/products.component';
import { StoresComponent } from './stores/stores.component';
import { ProductComponent } from './products/product/product.component';
import { StoreComponent } from './stores/store/store.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab2PageRoutingModule
  ],
  declarations: [Tab2Page,ProductsComponent,StoresComponent,ProductComponent,StoreComponent]
})
export class Tab2PageModule {}
