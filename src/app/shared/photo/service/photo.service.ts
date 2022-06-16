import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Photo} from "../photo.interface";

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient) { }

  listFromUser(username: string): Observable<Object[]>{
    return this.http.get<Photo[]>('http://localhost:3000/flavio/photos');
  }
}
