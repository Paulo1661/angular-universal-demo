import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Fruit } from 'src/app/models/fruit.model';
import { environment } from "src/environments/environment.prod";

@Injectable({
  providedIn: 'any'
})
export class FruitsService {

  baseUrl = environment.apiBaseUrl;

  constructor(private httpClient: HttpClient) { 
    console.log(this.baseUrl);
  }

  getFruits(): Observable<Fruit[]> {
    return this.httpClient.get<Fruit[]>(this.baseUrl+"/fruits");
  }

  getFruitById(id: number):Observable<Fruit> {
    return this.httpClient.get<Fruit>(this.baseUrl+"/fruits/"+id);
  }
}
