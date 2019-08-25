import { Component, OnInit } from '@angular/core';
// import { SearchComponent } from '../search/search.component';
import { GitServiceService } from '../services/git-service.service';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  user1;
  repos;
  userName: string;

  constructor(public gitService: GitServiceService, public http: HttpClient, private router:Router) {

    this.gitService.getUserDetails().subscribe(users => {
      this.user1 = users;
      console.log(this.user1);
    });
    this.gitService.getRepos().subscribe(result => {
      this.repos = result;
      console.log(this.repos);
    });
  }

    findUser(){
      this.gitService.updateUserName(this.userName);
      this.gitService.getUserDetails().subscribe(users => {
      this.user1 = users;
      console.log(this.user1);
    });
    this.gitService.getRepos().subscribe(result => {
      this.repos = result;
      console.log(this.repos);
    });
  }

  ngOnInit() {
  }

}