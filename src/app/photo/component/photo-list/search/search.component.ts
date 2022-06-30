import {Component, OnDestroy, OnInit} from '@angular/core';
import {debounceTime, Subject} from "rxjs";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {

  debounce: Subject<string> = new Subject<string>();

  constructor() {
  }

  ngOnInit(): void {
    this.debounce.pipe(debounceTime(300))
      // .subscribe(filter => this.filter = filter);
  }
  ngOnDestroy():void{
    this.debounce.unsubscribe();
  }

}
