import { Component, OnInit } from '@angular/core';
import { MainComponent } from '../main/main.component';
import { GitServiceService } from '../services/git-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  user1;
  repos;
  userName: string;

  constructor(public gitService: GitServiceService, private router: Router) {

    this.gitService.getUserDetails().subscribe(users => {
      this.user1 = users;
      console.log(this.user1);
    });
    this.gitService.getRepos().subscribe(result => {
      this.repos = result;
      console.log(this.repos);
    });
  }

  findUser() {
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

