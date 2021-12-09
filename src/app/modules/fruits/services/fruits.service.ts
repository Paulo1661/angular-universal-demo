import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Fruit } from 'src/app/models/fruit.model';
import { environment } from "src/environments/environment.prod";
const fruits = [
  {id: 1, name: "Banane"},
  {id: 2, name: "Orange"},
  {id: 3, name: "Kiwi"},
  {id: 4, name: "Apple"},
  {id: 5, name: "Guava"},
  {id: 6, name: "Mangoe"},
  {id: 7, name: "Avocado"},
  {id: 8, name: "Apricot"},
]
@Injectable({
  providedIn: 'any'
})
export class FruitsService {

  baseUrl = environment.apiBaseUrl;

  constructor(private httpClient: HttpClient) { 
    console.log(this.baseUrl);
  }

  getFruits(): Observable<Fruit[]> {
    //return this.httpClient.get<Fruit[]>(this.baseUrl+"/fruits");
    return of(fruits);
  }

  getFruitById(id: number):Observable<Fruit> {
    //return this.httpClient.get<Fruit>(this.baseUrl+"/fruits/"+id);
    return of(fruits[id-1]);
  }
}
