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
      uname:['', [Validators.required, Validators.pattern('[a-zA-Z-  ]*')]],
      pswd: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z-]*')]]
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


  check(users,acno,pswd,uname) {
    let us=0;
  //   console.log("Bhasy");
  //   console.log(acno);
  //   console.log(pswd);
  //  console.log(users);
  // var accno=users.filter(item=>item.accno==acno);

//   const [first,last]=uname.split(' ')
// console.log(last);



   for (let user of users) {
    //console.log( user.id);
    
    const [start,end]=user.username.split(' ')
    
    
   if(acno==user.accno&&pswd==user.password&&uname==end){
    localStorage.setItem("userName",user.username)
    localStorage.setItem("currentAcc",user.accno)
   
    us=1
    this.router.navigateByUrl("dashboard")
  }
   }
   if(us==0){
     
     alert("Invalid Account");
     
   }

   
}


  login() {
    
    if (this.loginForm.valid) {
      
      var acno = this.loginForm.value.acno
      var pswd = this.loginForm.value.pswd
      var uname = this.loginForm.value.uname
      //console.log("Akhil");
      fetch("https://621f300d311a70591403902f.mockapi.io/users").then(res => res.json()).then(data =>this.check(data,acno,pswd,uname));
      
  //   this.ds.login(acno,pswd)
  //   .subscribe((result:any)=>{
  //     if(result){
  //       alert(result.message)
  //       localStorage.setItem("userName",result.userName)
  //       localStorage.setItem("currentAcc",result.currentAcc)
  //       this.router.navigateByUrl("dashboard")
  //     }
  //   },
  //   (result)=>{
  //     alert(result.error.message)
     
  //   }
  //   )
  // }
  // else {
  //   alert("Invalid form")
  // }
}
}

// login() {

//   if (this.loginForm.valid) {
      
//     var acno = this.loginForm.value.acno
//     var pswd = this.loginForm.value.pswd

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
}

function data(data: any) {
  throw new Error('Function not implemented.');
}
