import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim = "National Bank"
 
  // acno = ""
  // pswd = ""
  //acc_details = ""

  loginForm=this.fb.group(
    {
      acno: ['', [Validators.required, Validators.minLength(4), Validators.pattern('[0-9]*')]],
      pswd: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]*'),Validators.minLength(5)]]
    }
  )
 
  constructor(private router:Router,private ds:DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  // accChange(event: any) {
  //   this.acno = event.target.value
  // }
  // pswdChange(event: any) {
  //   this.pswd = event.target.value
  // }
  login() {
    if (this.loginForm.valid) {
      
      var acno = this.loginForm.value.acno
      var pswd = this.loginForm.value.pswd

    var result= this.ds.login(acno,pswd)
    if(result){
      alert("Login Sucessful")
      this.router.navigateByUrl("dashboard")
    }
  }
  else {
    alert("Invalid form")
  }
}
}
// login(a:any,p:any) {
//   var acno = a.value
//   var pswd = p.value
//   let acc_details = this.user
//   if (acno in acc_details) {
//     if (pswd == acc_details[acno]["password"]) {
//       alert("Login Sucessful")
//     }
//     else {
//       alert("Incorrect Password")
//     }
//   }
//   else {
//     alert("Invalid User")
//   }
// }
// }
