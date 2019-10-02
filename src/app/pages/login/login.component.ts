import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $('.input-login').change(function(){
      console.log("teste");
     
    })

  }

  // efectInput(){
  //   console.log("teste");
  //   $(".input-login").css({border: '0 solid rgb(29, 117, 218)'}).animate({
  //     borderWidth: 2,
  //     borderColor: 'rgb(29, 117, 218)',
  //     borderRadius: 5
  //   }, 500);
  // }

  

}
