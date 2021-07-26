import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  aim = " National Bank"
  acno = ""
  pswd = ""
  amt = ""

  acnow = ""
  pswdw = ""
  amtw = ""
  constructor(private ds: DataService) { }

  ngOnInit(): void {
  }
  deposit() {
    var acno = this.acno
    var pswd = this.pswd
    var amt = this.amt

    var result = this.ds.deposit(acno, pswd, amt)
    if (result) {
      alert("Amount " + amt + "Credited. Balance: " + result)
    }

  }
    withdraw(){
      var acnow = this.acnow
      var pswdw = this.pswdw
      var amtw = this.amtw

      var resultw = this.ds.withdraw(acnow, pswdw, amtw)
      if (resultw) {
        alert("Amount " + amtw + "debited. Balance: " + resultw)
        
      }
    }
  }