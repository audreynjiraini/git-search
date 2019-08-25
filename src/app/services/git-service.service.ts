import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GitServiceService {

  userName: string;
  apiUrl: string = "https://api.github.com/users/";

  constructor(public http:HttpClient) {
    this.userName = "audreynjiraini"
   }

  getUserDetails() {
    return this.http.get(this.apiUrl + this.userName + "?access_token=" + environment.apiKey);
  }

  getRepos() {
    return this.http.get(this.apiUrl + this.userName + "/repositories?access_token=" + environment.apiKey);
  }

  updateUserName(userName: string) {
    this.userName = userName;
  }

}