import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim = "National Bank"
 
  acno = ""
  pswd = ""
  acc_details = ""

 
  constructor(private router:Router,private ds:DataService) { }

  ngOnInit(): void {
  }
  // accChange(event: any) {
  //   this.acno = event.target.value
  // }
  // pswdChange(event: any) {
  //   this.pswd = event.target.value
  // }
  login() {
    var acno = this.acno
    var pswd = this.pswd
    var result= this.ds.login(acno,pswd)
    if(result){
      alert("Login Sucessful")
      this.router.navigateByUrl("dashboard")
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
