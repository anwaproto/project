import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Http } from '@angular/http'

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  uname = ''
  upwd = ''
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private ajax: Http,
    private toast: ToastController
    ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  login(){
    var url = 'http://localhost:8080/user/login'
    if(!this.uname){
      var t1 = this.toast.create({message:'用户名不能为空',duration:1500})
      t1.present()
    }else if(!this.upwd){
      var t2 = this.toast.create({message:'密码不能为空',duration:1500})
      t2.present()
    }else{
      this.ajax.post(url,{uname:this.uname,upwd:this.upwd},{withCredentials:true}).subscribe((result:any)=>{
        var code = result._body
        var json = eval("("+code+")")
        if(json.code==200){
          sessionStorage.setItem('uname',this.uname)
          var t3 = this.toast.create({message:'登录成功',duration:1500})
          t3.present()
          this.uname = ''
          this.upwd = ''
          this.navCtrl.pop()
          
        }else{
          var t4 = this.toast.create({message:'用户名/密码错误',duration:1500})
          t4.present()
          this.uname = ''
          this.upwd = ''
        }
      })
    }
  }
}
