import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-auth-container',
  imports: [CommonModule, RouterModule],
  templateUrl: './auth-container.component.html',
  styleUrl: './auth-container.component.scss'
})
export class AuthContainerComponent {

  @Input() isLogin: boolean = false;
  @Input() isForgotPW: boolean = false;

  isText: boolean = false;
  type: string = 'password';

  togglePasswordVisibility() {
    this.isText = !this.isText
    this.type = this.isText ? "text" : "password";
  }
}
