import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http'
import { NotFoundPage } from '../not-found/not-found'
import { CartPage } from '../cart/cart'
import { LoginPage } from '../login/login'

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  cart = CartPage
  notfound = NotFoundPage
  pid
  piclist = []
  title
  price
  subtitle
  uname = sessionStorage.getItem('uname')
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private ajax: HttpClient,
    private toast:ToastController
    ) {}

  ionViewDidLoad() {
    this.pid = this.navParams.get("id")
    var url = 'http://localhost:8080/product/detail?lid='+this.pid
    this.ajax.get(url).subscribe((result:any)=>{
      this.piclist = result.details.picList
      console.log(this.piclist)
      this.title = result.details.title
      this.subtitle = result.details.subtitle
      this.price = result.details.price
    })  
  }
  addcart(){
    var url = 'http://localhost:8080/cart/add?buyCount=1&&lid='+this.pid+'&&uname='+this.uname
    this.ajax.get(url).subscribe((result:any)=>{
      if(result.code==300){
        this.navCtrl.push(LoginPage)
      }else if(result.code==200){
        var mytoast1 = this.toast.create({message:'添加成功'})
        mytoast1.present()
      }else{
        var mytoast2 = this.toast.create({message:'添加失败'})
        mytoast2.present()
      }
    })
  }
}
