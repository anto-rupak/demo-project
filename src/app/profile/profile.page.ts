import { Component, OnInit, ViewChild } from '@angular/core';
import { artists } from './data'
import * as faker from 'faker';

import { IonInfiniteScroll, IonVirtualScroll } from '@ionic/angular';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  @ViewChild(IonInfiniteScroll, {static: false}) infiniteScroll: IonInfiniteScroll;
  @ViewChild(IonVirtualScroll, {static: false}) virtualScroll: IonVirtualScroll;

  constructor() { }
  dataList = [];
  ngOnInit() {
    this.getEmployees()
  }
  getEmployees() {
    for (let i = 0; i < 20; i++) {
      this.dataList.push({
        image: faker.image.avatar(),
        name: faker.name.firstName(),
        address: faker.address.streetAddress(),
        intro: faker.lorem.words()
      })
    }
  }
  loadData(event) {

    // Using settimeout to simulate api call 
    setTimeout(() => {

      // load more data
      this.getEmployees()

      //Hide Infinite List Loader on Complete
      event.target.complete();

      //Rerender Virtual Scroll List After Adding New Data
      this.virtualScroll.checkEnd();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.dataList.length == 1000) {
        event.target.disabled = true;
      }
    }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }
}
