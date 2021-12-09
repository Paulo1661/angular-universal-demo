import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: "home", component: HomeComponent,
  },
  {
    path: "", redirectTo: "home", pathMatch: "full"
  },
  {
    path: "fruits",
    loadChildren: () => import('./modules/fruits/fruits.module').then(m => m.FruitsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
