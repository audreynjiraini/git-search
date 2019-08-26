import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Users } from '../users';
import { Repos } from '../repos';
@Injectable({
  providedIn: 'root'
})
export class GitServiceService {

 userNames:Users;
 Repositories :Repos; 
  apiUrl: string = "https://api.github.com/users/";

  constructor(public http:HttpClient) {
     this.userNames = new Users ("","","",0,new Date)
   }

  getUserDetails(userName:string) {
    interface users{
      login:string;
      avatar_url: string;
      email: string;
      public_repos: number;
      created_at: Date;
    }
    return new Promise((resolve, reject)=>{
      this.http.get<users>(this.apiUrl + userName + "?access_token=" + environment.apiKey).toPromise().then(
        (results)=>{
          this.userNames = results;
          // console.log(results)
          resolve();this.apiUrl + userName + "?access_token=" + environment.apiKey
        },
        (error)=>{
          console.log(error)
          reject();
        }
      )
    });
  }

  getRepos(userName) {
    return this.http.get(this.apiUrl + userName + "/repos?access_token=" + environment.apiKey);
  }
  allRepos(userName){
    interface repository{
      name:string;
      html_url:string;
      description:string;
      created_at:Date;
    }
    return new Promise((resolve,reject)=>{
      this.http.get<repository>(this.apiUrl + userName + "/repos?access_token=" + environment.apiKey).toPromise().then(
        (results) => {
          this.Repositories = results;
          // console.log(this.Repositories);
          resolve();
        },
        (error) => {
          console.log(error);
          reject();
        }
      );
    });
  }

  updateUserName(userName: string) {
    userName = userName;
  }

}