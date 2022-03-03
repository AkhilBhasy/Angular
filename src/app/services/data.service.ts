import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const options={
  withCredentials:true
}


@Injectable({
  providedIn: 'root'
})
export class DataService {



  currentUser = ""
currentAcc=""
  user: any = {
  //   1000: { acno: 1000, uname: "Akhil", password: "userone", balance: 5000,transaction:[] },
  //   1001: { acno: 1001, uname: "Shinu", password: "usertwo", balance: 3000,transaction:[]},
  //   1002: { acno: 1002, uname: "Hiran", password: "userthree", balance: 2000,transaction:[] },
  //   1003: { acno: 1003, uname: "Sayooj", password: "userfour", balance: 3000,transaction:[] },
  //   1004: { acno: 1004, uname: "Binu", password: "userfive", balance: 1000,transaction:[] }
   }


  constructor(private http:HttpClient) {
    //this.getDetails()
  }

  saveDetails() {
    if (this.user) {
      localStorage.setItem("user", JSON.stringify(this.user))
    }
    if (this.currentUser) {
      localStorage.setItem("currentUser", JSON.stringify(this.currentUser))
    }
    if (this.currentAcc) {
      localStorage.setItem("currentAcc", JSON.stringify(this.currentAcc))
    }
  }

  getDetails() {
    if (localStorage.getItem("user")) {
      this.user = JSON.parse(localStorage.getItem("user") || '')
    }
    if (localStorage.getItem("currentUser")) {
      this.currentUser = JSON.parse(localStorage.getItem("currentUser") || '')
    }
    if (localStorage.getItem("currentAcc")) {
      this.currentAcc = JSON.parse(localStorage.getItem("currentAcc") || '')
    }
  }
  getTransaction(acno:any){

    const data={
      acno
    }
    return this.http.post("http://localhost:3000/transaction",data,options)
   
  }

  register(acno: any, uname: any, password: any) {
    const data={
      acno,
      uname,
      password
    }
    return this.http.post("http://localhost:3000/register",data)
//     let accDetails = this.user
//     if (acno in accDetails) {
//       return false
//     }
//     else {
//       accDetails[acno] = {
//         acno,
//         uname,
//         password,
//         balance: 0,
// transaction:[]
//       }
//       this.saveDetails()
//       console.log(this.user);
//       return true


//     }
  }

 

  login(acno: any, pswd: any) {
    const data={
      acno,
      pswd
    }


   fetch("https://621f300d311a70591403902f.mockapi.io/users").then(res => res.json()).then(data => console.log(data));


    return this.http.post("http://localhost:3000/login",data,options)




    // let acc_details = this.user
    // if (acno in acc_details) {
    //   if (pswd == acc_details[acno]["password"]) {
    //     this.currentUser = acc_details[acno]["uname"]
    //     this.currentAcc=acno
    //     this.saveDetails()
    //     return true
    //   }
    //   else {
    //     alert("Incorrect Password")
    //     return false
    //   }
    // }
    // else {
    //   alert("Invalid User")
    //   return false
    // }
  }


  deposit(acno: any, pswd: any, amt: any) {
    const data={
      acno,
      pswd,
      amt
    }
    return this.http.post("http://localhost:3000/deposit",data,options)



    // var amount = parseInt(amt)
    // let acc_details = this.user
    // if (acno in acc_details) {
    //   if (pswd == acc_details[acno]["password"]) {
    //     acc_details[acno]["balance"] += amount

    //     acc_details[acno].transaction.push({
    //       amount:amount,
    //       type:"Credit"
    //     })
    //     this.saveDetails()
    //     return acc_details[acno]["balance"]
    //   }
    //   else {
    //     alert("Incorrect Password")
    //     return false
    //   }
    // }
    // else {
    //   alert("Invalid User")
    //   return false
    // }

  }


  withdraw(acno: any, pswd: any, amt: any) {

    const data={
      acno,
      pswd,
      amt
    }
    return this.http.post("http://localhost:3000/withdraw",data,options)






    // var amount = parseInt(amt)
    // let acc_details = this.user
    // if (acno in acc_details) {
    //   if (pswd == acc_details[acno]["password"]) {
    //     if (acc_details[acno]["balance"] > amount) {


    //       acc_details[acno]["balance"] -= amount
    //       acc_details[acno].transaction.push({
    //         amount:amount,
    //         type:"Debit"
    //       })
    //       this.saveDetails()
    //       return acc_details[acno]["balance"]
    //     }
    //     else {
    //       alert("Insufficient Balance")
    //       return false
    //     }
    //   }
    //   else {
    //     alert("Incorrect Password")
    //     return false
    //   }
    // }
    // else {
    //   alert("Invalid User")
    //   return false
    // }

  }

  deleteAcc(acno:any){
    return this.http.delete("http://localhost:3000/deleteAcc/"+acno,options)
  }

}

