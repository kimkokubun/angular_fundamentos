import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {PhotoService} from "../../service/photo.service";
import {Photo} from "../../photo.interface";

@Injectable({
  providedIn: 'root'
})
export class PhotoListResolver implements Resolve<Photo[]> {
  constructor(private service: PhotoService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Photo[]> {
    const userName = route.params['userName'];
    return this.service.listFromUser(userName);

  }
}
