import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl: string = 'https://jsonplaceholder.cypress.io/';

  constructor(private http: HttpClient) { }

  listUsers() {
    return this.http.get(this.baseUrl + 'users');
  }

  viewUsers(id: string) {
    return this.http.get(this.baseUrl + 'users/' + id);
  }

  addUser(userObj: string) {
    return this.http.post(this.baseUrl + 'users', userObj);
  }



}
