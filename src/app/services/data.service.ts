import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  

  currentUser=""

  user: any = {
    1000: { acno: 1000, uname: "Akhil", password: "userone", balance: 5000 },
    1001: { acno: 1001, uname: "Shinu", password: "usertwo", balance: 3000 },
    1002: { acno: 1002, uname: "Hiran", password: "userthree", balance: 2000 },
    1003: { acno: 1003, uname: "Sayooj", password: "userfour", balance: 3000 },
    1004: { acno: 1004, uname: "Binu", password: "userfive", balance: 1000 }
  }


  constructor() {
    this.getDetails()
   }

  saveDetails(){
    localStorage.setItem("user",JSON.stringify(this.user))

    if(this.currentUser){
      localStorage.setItem("currentUser",JSON.stringify(this.currentUser))
    }
  }

  getDetails(){
    if(localStorage.getItem("user")){
      this.user=JSON.parse(localStorage.getItem("user") || '')
    }
    if(localStorage.getItem("currentUser")){
      this.currentUser=JSON.parse(localStorage.getItem("currentUser") || '')
    }
  }

  register(acno: any, uname: any, password: any) {
    let accDetails = this.user
    if (acno in accDetails) {
      return false
    }
    else {
      accDetails[acno] = {
        acno,
        uname,
        password,
        balance: 0
      }
      this.saveDetails()
      console.log(this.user);
      return true


    }
  }
  login(acno: any, pswd: any) {
    let acc_details = this.user
    if (acno in acc_details) {
      if (pswd == acc_details[acno]["password"]) {
        this.currentUser=acc_details[acno]["uname"]
        return true
      }
      else {
        alert("Incorrect Password")
        return false
      }
    }
    else {
      alert("Invalid User")
      return false
    }
  }


  deposit(acno: any, pswd: any, amt: any) {
    var amount=parseInt(amt)
    let acc_details = this.user
    if (acno in acc_details) {
      if (pswd == acc_details[acno]["password"]) {
        acc_details[acno]["balance"] += amount
        this.saveDetails()
        return acc_details[acno]["balance"]
      }
      else {
        alert("Incorrect Password")
        return false
      }
    }
    else {
      alert("Invalid User")
      return false
    }

  }


  withdraw(acno: any, pswd: any, amt: any) {
    var amount=parseInt(amt)
    let acc_details = this.user
    if (acno in acc_details) {
      if (pswd == acc_details[acno]["password"]) {
        if(acc_details[acno]["balance"]>amount){

        
        acc_details[acno]["balance"] -= amount
        this.saveDetails()
        return acc_details[acno]["balance"]
      }
      else{
        alert("Insufficient Balance")
        return false
      }
    }
      else {
        alert("Incorrect Password")
        return false
      }
    }
    else {
      alert("Invalid User")
      return false
    }

  }

}

