import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FruitComponent } from './components/fruit/fruit.component';
import { FruitsComponent } from './components/fruits/fruits.component';

const routes: Routes = [
  {
    path: "", component: FruitsComponent
  },
  {path: ":id", component: FruitComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FruitsRoutingModule { }
