import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, observable} from 'rxjs';
import {User} from './user';

@Injectable({
  providedIn: 'root'
})
export class VKserviceService {
  constructor(private http: HttpClient) { }

  getFrieds(): Observable<any> {
    let token = User.token;
    let user_id = User.user_id;
    return  this.http.get('https://api.vk.com/method/friends.get?user_id='+user_id+'&order=hints&count=10&access_token='+token+'&v=5.101');
  }
}
