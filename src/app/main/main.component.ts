import { Component, OnInit } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { GitServiceService } from '../services/git-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  user1:any = [];

  constructor(public gitService:GitServiceService, public http:HttpClient) {

    this.gitService.getUserDetails().subscribe(users => {
      this.user1 = users;
      console.log(this.user1);
    });
    this.gitService.getRepos().subscribe(result => {
      this.user1 = result;
    });
   }

  ngOnInit() {
  }

}
