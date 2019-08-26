import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  userName:string;

  @Output() search = new EventEmitter<any>()

  constructor() {
  }

  ngOnInit() {
  }

  findUser(){
    this.search.emit(this.userName);
  }

}

