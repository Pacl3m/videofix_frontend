import { Component, ViewChild, ElementRef } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { VideoboxComponent } from "../videobox/videobox.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  imports: [HeaderComponent, VideoboxComponent, CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  currentVideoSrc: string = '../../assets/videos/275633_small.mp4';

  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;

  onVideoChange(newSrc: string) {
    this.currentVideoSrc = newSrc;
    // Erzwingt das Neuladen des Videos:
    const video: HTMLVideoElement = this.videoPlayer.nativeElement;
    video.load();                  // lädt neue Quelle
    video.play();                  // startet sofort wieder
  }

}
