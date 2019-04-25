import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login'

/**
 * Generated class for the UserCenterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-center',
  templateUrl: 'user-center.html',
})
export class UserCenterPage {
  login = LoginPage
  uname
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ionViewWillEnter(){
    this.uname = sessionStorage.getItem('uname')
  }

  ionViewDidLoad() {
  }
  quit(){
    sessionStorage.clear();
  }
}
