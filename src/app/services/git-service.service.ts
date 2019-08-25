import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GitServiceService {

  userName: string;
  apiUrl: string = "https://api.github.com/users/";
  apiKey: string = "43085be5dd5dc02227ff26beccddea3625b76fe2";

  constructor(public http:HttpClient) {
    this.userName = "audreynjiraini"
   }

   updateUser(userName:string) {
     this.userName = userName;
   }

  getUserDetails() {
    return this.http.get(this.apiUrl + this.userName + "?access_token=" + this.apiKey);
  }

  getRepos() {
    return this.http.get(this.apiUrl + this.userName + "/repositories" + "?access_token" + this.apiKey);
  }

  // searchUser(userName: string) {
  //   this.userName = userName;
  // }
}