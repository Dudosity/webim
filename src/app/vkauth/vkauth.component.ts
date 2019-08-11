import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-vkauth',
  templateUrl: './vkauth.component.html',
  styleUrls: ['./vkauth.component.css']
})
export class VKauthComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) {
    console.log(this.document.location.href);

  }
  ngOnInit() {
  }

}
