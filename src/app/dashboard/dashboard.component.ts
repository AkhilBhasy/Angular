import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  aim = " National Bank"
 //user=this.ds.currentUser
  // acno = ""
  // pswd = ""
  // amt = ""

  // acnow = ""
  // pswdw = ""
  // amtw = ""
  depositForm = this.fb.group(
    {
      acno: ['', [Validators.required, Validators.minLength(4), Validators.pattern('[0-9]*')]],
      pswd: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]*'), Validators.minLength(5)]],
      amt: ['', [Validators.required, Validators.pattern('[0-9]*')]]
    }
  )

  withdrawForm = this.fb.group(
    {
      acnow: ['', [Validators.required, Validators.minLength(4), Validators.pattern('[0-9]*')]],
      pswdw: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]*'), Validators.minLength(5)]],
      amtw: ['', [Validators.required, Validators.pattern('[0-9]*')]]
    }
  )

  userName:any
  acno:any


  constructor(private ds: DataService, private fb: FormBuilder,private router:Router) {
    this.userName=localStorage.getItem("userName")
   }

  ngOnInit(): void {
  }
  deposit() {
    if (this.depositForm.valid) {
      var acno = this.depositForm.value.acno
      var pswd = this.depositForm.value.pswd
      var amt = this.depositForm.value.amt
      this.ds.deposit(acno, pswd, amt)
      .subscribe((result:any)=>{
        if(result){
          alert(result.message)
        }
      },
      (result)=> {
        alert(result.error.message)
        
      }
      )
    }
    else {
      alert("Invalid form")
    }
  }
  withdraw() {
    if (this.withdrawForm.valid) {
      var acnow = this.withdrawForm.value.acnow
      var pswdw = this.withdrawForm.value.pswdw
      var amtw = this.withdrawForm.value.amtw

      this.ds.withdraw(acnow, pswdw, amtw)
      .subscribe((result:any)=>{
        if(result){
          alert(result.message)
        }
      },
      (result)=> {
        alert(result.error.message)
        
      }
      )
    }
    else {
      alert("Invalid form")
    }
  //     if (resultw) {
  //       alert("Amount " + amtw + "debited. Balance: " + resultw)

  //     }
  //   }
  //   else {
  //     alert("Invalid form")
  //   }
  // }
}
DeleteAcc(){
  this.acno=localStorage.getItem("currentAcc")
}

onDelete(event:any){
  //alert(event)
  this.ds.deleteAcc(event)
  .subscribe((result:any)=>{
    if(result){
      alert(result.message)
      this.router.navigateByUrl("")
    }
  },
  (result)=>{
    alert(result.error.message)
  }
  )
}

onCancel(){
  this.acno=""
}
}