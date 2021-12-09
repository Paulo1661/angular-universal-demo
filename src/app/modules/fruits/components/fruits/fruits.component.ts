import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Fruit } from 'src/app/models/fruit.model';
import { FruitsService } from '../../services/fruits.service';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit {

  fruits$: Observable<Fruit[]>;

  constructor(private fruitServices: FruitsService, private router: Router) {
    this.fruits$=this.fruitServices.getFruits();
  }

  ngOnInit(): void {
  }

  onDetails(id: number) {
    if(id != 0 )
      this.router.navigateByUrl("/fruits/"+id);
    else 
      console.log("Invalid id"+id);
  }

}
