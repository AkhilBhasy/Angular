import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  aim = " National Bank"
 user=this.ds.currentUser
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
  constructor(private ds: DataService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  deposit() {
    if (this.depositForm.valid) {
      var acno = this.depositForm.value.acno
      var pswd = this.depositForm.value.pswd
      var amt = this.depositForm.value.amt
      var result = this.ds.deposit(acno, pswd, amt)
      if (result) {
        alert("Amount " + amt + "Credited. Balance: " + result)
      }
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

      var resultw = this.ds.withdraw(acnow, pswdw, amtw)
      if (resultw) {
        alert("Amount " + amtw + "debited. Balance: " + resultw)

      }
    }
    else {
      alert("Invalid form")
    }
  }
}