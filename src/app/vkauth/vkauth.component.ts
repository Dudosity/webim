import {Component, OnInit, Inject, DoCheck} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { DOCUMENT } from '@angular/common';
import  {User} from '../user';
import {VKserviceService} from '../vkservice.service';

@Component({
  selector: 'app-vkauth',
  templateUrl: './vkauth.component.html',
  styleUrls: ['./vkauth.component.css']
})
export class VKauthComponent implements OnInit, DoCheck {
  url;
  token = '';
  user_id = '';

  constructor(private router: Router, private VKservice: VKserviceService) {

  }

  ngOnInit() {


  }

  ngDoCheck(): void {
    this.url = this.router.url;
    console.log(this.router.url);

    if (this.url.lastIndexOf('access_token') != -1){
      let i = this.url.lastIndexOf('access_token') + 13;
      this.token = ''
      while (this.url[i] != '&'){
        this.token += this.url[i];
        i ++;
      }
      User.token = this.token;
      i = 0;
    }
    if (this.url.lastIndexOf('user_id') != -1){
      this.user_id = ''
      let i = this.url.lastIndexOf('user_id') + 8;
      while (this.url[i] != '&'){
        this.user_id += this.url[i];
        i ++;
      }
      User.user_id = this.user_id;
      i = 0;
    }

  }
  getFriends(){
    this.VKservice.getFrieds().subscribe(
      response => {
        console.log('Все огонь', response);
      },
      error => console.log(error)
    );
  }
}
