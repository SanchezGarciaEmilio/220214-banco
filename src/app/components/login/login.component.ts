import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup

  constructor(private fb: FormBuilder, private toastr: ToastrService, private router: Router) {
    this.loginForm = this.fb.group({
      usuario: ['', Validators.required],
      contraseña: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  entrar() {
    const usuario = this.loginForm.value.usuario
    const contraseña = this.loginForm.value.contraseña
    if (usuario == "admin" && contraseña == "admin") {
      this.router.navigate(['/home'])
    } else {
      this.toastr.error('El usuario o la contraseña son incorrectos', 'Login incorrecto');

    }
  }
}
