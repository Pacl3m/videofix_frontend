import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-auth-container',
  imports: [CommonModule],
  templateUrl: './auth-container.component.html',
  styleUrl: './auth-container.component.scss'
})
export class AuthContainerComponent {

  isText: boolean = false;
  type: string = 'password';

  togglePasswordVisibility() {
    this.isText = !this.isText
    this.type = this.isText ? "text" : "password";
  }
}
