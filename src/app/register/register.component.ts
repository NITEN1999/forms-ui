import { Component } from '@angular/core';
import { UserService } from '../user.services';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm!: FormGroup ;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]*$')]]
    });
  }

  register(): void {
    if (this.registerForm.valid) {
      // Call the registration service here
      console.log(this.registerForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
    
  }

