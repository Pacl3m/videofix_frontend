import { Component } from '@angular/core';
import { BackgroundComponent } from "../background/background.component";

@Component({
  selector: 'app-home',
  imports: [BackgroundComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
