import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Fruit } from 'src/app/models/fruit.model';
import { FruitsService } from '../../services/fruits.service';

@Component({
  selector: 'app-fruit',
  templateUrl: './fruit.component.html',
  styleUrls: ['./fruit.component.css']
})
export class FruitComponent implements OnInit {

  fruit$: Observable<Fruit>;
  fruitSubscription: Subscription;

  constructor(
    private fruitsService: FruitsService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    const fruitId = this.route.snapshot.paramMap.get('id');
    this.fruit$ = this.fruitsService.getFruitById(Number(fruitId));
  }

  onBack() {
    this.location.back();
  }

  onDownload() {
    this.fruitSubscription=this.fruit$.subscribe(fruit=>{
        const file = new Blob([JSON.stringify(fruit)], { type: 'text/txt' });
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(file);
        link.download = `fruit-details-${fruit.id}.txt`;
        link.click();
    });
  }

  ngOnDestroy(): void {
    this.fruitSubscription.unsubscribe();
  }

}
