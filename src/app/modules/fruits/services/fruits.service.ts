import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Fruit } from 'src/app/models/fruit.model';
import { environment } from "src/environments/environment.prod";
const fruits = [
  {id: 1, name: "Banane", description: "Yellow fruit with a curved shape"},
  {id: 2, name: "Orange", description: "Citrus fruit known for its orange color and juiciness"},
  {id: 3, name: "Kiwi", description: "Small, green fruit with a fuzzy brown exterior"},
  {id: 4, name: "Apple", description: "Common fruit available in various colors and flavors"},
  {id: 5, name: "Guava", description: "Tropical fruit with a sweet and slightly tangy flavor"},
  {id: 6, name: "Mangoe", description: "Juicy, tropical fruit with a distinctive aroma"},
  {id: 7, name: "Avocado", description: "Creamy fruit often used in salads and spreads"},
  {id: 8, name: "Apricot", description: "Small, orange fruit with a velvety skin and sweet taste"}
];

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

  convertToJson(jsonData: any): string {
    const keys = Object.keys(jsonData);
    const values = keys.map(key => jsonData[key]);

    const csvRow = values.map(value => `${value}`).join(',');

    return keys.join(',') + '\n' + csvRow;
  }
}
