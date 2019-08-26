import { Component, OnInit } from '@angular/core';
import {Users} from '../users'
import { GitServiceService } from '../services/git-service.service';
import { Repos } from '../repos';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  user1: Users;
  repos: Repos;
  

  constructor( public gitService: GitServiceService) {
  }

    findUser(userName){
    this.gitService.getUserDetails(userName).then(
      ()=>{
        this.user1 = this.gitService.userNames;
        console.log(this.gitService.userNames);
      },
      (error)=>{
        console.log(error);
      });
      this.gitService.allRepos(userName).then(
        (results)=>{
          this.repos = this.gitService.Repositories
          console.log(this.repos);
        },
        (error)=>{
          console.log(error);
        }
      );
   }

  ngOnInit() {
    this.findUser("audreynjiraini")
  }

}