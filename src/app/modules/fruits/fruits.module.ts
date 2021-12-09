import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FruitsRoutingModule } from './fruits-routing.module';
import { FruitsComponent } from './components/fruits/fruits.component';
import { FruitComponent } from './components/fruit/fruit.component';
import { FruitsService } from './services/fruits.service';


@NgModule({
  declarations: [
    FruitsComponent,
    FruitComponent
  ],
  imports: [
    CommonModule,
    FruitsRoutingModule
  ]
})
export class FruitsModule { }
