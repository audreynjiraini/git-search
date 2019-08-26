import { Component, OnInit } from '@angular/core';
import { GitServiceService } from '../services/git-service.service';
import { Users } from '../users';
import { Repos } from '../repos';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
  user1: Users;
  repos: Repos;
  userName: string;

  constructor(public gitService: GitServiceService) {
  }

  findUser(userName) {
    this.gitService.getUserDetails(userName).then(
      () => {
        this.user1 = this.gitService.userNames;
        console.log(this.gitService.userNames);
      },
      (error) => {
        console.log(error);
      });
    this.gitService.allRepos(userName).then(
      (results) => {
        this.repos = this.gitService.Repositories
        console.log(this.repos);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit() {
    this.findUser("audreynjiraini")
  }

}