import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-reactcomp1',
  templateUrl: './reactcomp1.component.html',
  styleUrls: ['./reactcomp1.component.css']
})
export class Reactcomp1Component implements OnInit {

  checkpassss: boolean = false;
  myForm: FormGroup; // declare . 

  constructor(private userService: UserService) { 
    this.CreateForm();
  }

  ngOnInit() {
  }

  CreateForm(){
    this.myForm = new FormGroup({ // memory allocation 
      'firstName': new FormControl('', Validators.required),
      'lastname': new FormControl('', Validators.required),
      'password': new FormControl(''),
      'confirmpassword': new FormControl(''),
      'email': new FormControl('codemindtechnology@gmail.com', [Validators.required ,Validators.email, Validators.maxLength(8)])
    });
  }
  OnSubmit()
  {
    if(this.myForm.valid == true)
    {
      alert('call to server')
      console.log(this.myForm.value);
      let user = new User();
      user.firstName = this.myForm['controls'].firstName.value;
      user.lastName = this.myForm['controls'].lastname.value;
      user.email = this.myForm['controls'].email.value;

      this.userService.saveuser(user);
    }
    else{
      alert('not called to server form invalid')
      console.log(this.myForm);
    }
    
  }

  checkPass(pass, confpass) {
    console.log('checkPass', pass, confpass);
    if(pass == confpass)
    {
     this.checkpassss = false;
    } 
    else {
    this.checkpassss = true;
    }
  }
}
