import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim = "Your Banking Partner"
 
  acno = ""
  pswd = ""
  acc_details = ""

  user: any = {
    1000: { acno: 1000, uname: "Akhil", password: "userone", balance: 5000 },
    1001: { acno: 1001, uname: "Shinu", password: "usertwo", balance: 3000 },
    1002: { acno: 1002, uname: "Hiran", password: "userthree", balance: 2000 },
    1003: { acno: 1003, uname: "Sayooj", password: "userfour", balance: 3000 },
    1004: { acno: 1004, uname: "Binu", password: "userfive", balance: 1000 }
  }
  constructor() { }

  ngOnInit(): void {
  }
//   accChange(event: any) {
//     this.acno = event.target.value
//   }
//   pswdChange(event: any) {
//     this.pswd = event.target.value
//   }
//   login() {
//     var acno = this.acno
//     var pswd = this.pswd
//     let acc_details = this.user
//     if (acno in acc_details) {
//       if (pswd == acc_details[acno]["password"]) {
//         alert("Login Sucessful")
//       }
//       else {
//         alert("Incorrect Password")
//       }
//     }
//     else {
//       alert("Invalid User")
//     }
//   }
// }

login(a:any,p:any) {
  var acno = a.value
  var pswd = p.value
  let acc_details = this.user
  if (acno in acc_details) {
    if (pswd == acc_details[acno]["password"]) {
      alert("Login Sucessful")
    }
    else {
      alert("Incorrect Password")
    }
  }
  else {
    alert("Invalid User")
  }
}
}
