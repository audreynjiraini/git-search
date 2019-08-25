import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GitServiceService {

  constructor(public http:HttpClient) { }

  getUserDetails() {
    return this.http.get("https://api.github.com/users/audreynjiraini?access_token=43085be5dd5dc02227ff26beccddea3625b76fe2")
  }
}
