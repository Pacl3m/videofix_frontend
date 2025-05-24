import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { VideoboxComponent } from "../videobox/videobox.component";
import { CommonModule } from '@angular/common';
import { Video } from '../../models/video.model';
import { VideoService } from '../../app/service/video.service';

@Component({
  selector: 'app-main',
  imports: [HeaderComponent, VideoboxComponent, CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {
  currentVideoSrc: string = '../../assets/videos/275633_small.mp4';
  videos: Video[] = [];
  isLoading = true;
  error: string | null = null;
  currentVideo: Video | null = null;


  constructor(private videoService: VideoService) { }

  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;

  onVideoChange2(newSrc: string) {
    const selectedVideo = this.videos.find(v => v.videoSrc === newSrc);
    if (!selectedVideo) return;

    this.currentVideo = selectedVideo;
    this.currentVideoSrc = selectedVideo.videoSrc;

    const video: HTMLVideoElement = this.videoPlayer.nativeElement;
    video.load();
    video.play();
  }

  onVideoChange(newSrc: string) {
    this.currentVideoSrc = newSrc;
    // Erzwingt das Neuladen des Videos:
    const video: HTMLVideoElement = this.videoPlayer.nativeElement;
    video.load();                  // lädt neue Quelle
    video.play();                  // startet sofort wieder
  }

  ngOnInit(): void {
    this.videoService.getVideos().subscribe({
      next: (data) => {
        this.videos = data;
        this.isLoading = false;
      },
      error: (err) => {
        this.error = 'Fehler beim Laden der Videos';
        this.isLoading = false;
      }
    });
  }

}
