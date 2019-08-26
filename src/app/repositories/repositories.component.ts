import { Component, OnInit } from '@angular/core';
import { GitServiceService } from '../services/git-service.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
  user1;
  repos;
  userName: string;

  constructor(public gitService: GitServiceService) {

    // this.gitService.getUserDetails().subscribe(users => {
    //   this.user1 = users;
    //   console.log(this.user1);
    // });
    // this.gitService.getRepos().subscribe(result => {
    //   this.repos = result;
    //   console.log(this.repos);
    // });
  }

    findUser(){
    //   this.gitService.updateUserName(this.userName);
    //   this.gitService.getUserDetails().subscribe(users => {
    //   this.user1 = users;
    //   console.log(this.user1);
    // });
    // this.gitService.getRepos().subscribe(result => {
    //   this.repos = result;
    //   console.log(this.repos);
    // });
  }

  ngOnInit() {
  }

}