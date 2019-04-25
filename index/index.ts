import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http'
import { DetailPage } from '../detail/detail'

/**
 * Generated class for the IndexPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-index',
  templateUrl: 'index.html',
})
export class IndexPage {
  detail = DetailPage
  banner = []
  nlist = []
  thlist = []
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private myajax:HttpClient
    ) {}

  ionViewDidLoad() {
    this.myajax.get('http://localhost:8080/index').subscribe((data:any)=>{
      console.log(data)
      this.banner = data.carouselItems  
      this.nlist = data.newArrialItems
      this.thlist = data.recommendedItems
    })
  }

}
