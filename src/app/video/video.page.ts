import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video',
  templateUrl: './video.page.html',
  styleUrls: ['./video.page.scss'],
})
export class VideoPage implements OnInit {
  @ViewChild('myVideo', { static: false }) myVideo: ElementRef;
  constructor() { }
  index: any = 1;
  src: any = '../../assets/video/171124_B2_UHD_001.mp4';
  video = [{ src: '../../assets/video/171124_B2_UHD_001.mp4' }, { src: '../../assets/video/BirdNoSound.mp4' }, { src: '../../assets/video/HS011.mov' }]
  ngOnInit() {
  }
  playVideo() {
    /**
     * You are accessing a dom element directly here,
     * so you need to call "nativeElement" first.
     */
    this.myVideo.nativeElement.play();
  }
  stopVideo() {
    /**
     * You are accessing a dom element directly here,
     * so you need to call "nativeElement" first.
     */
    this.myVideo.nativeElement.pause();
  }

  nextVideo() {
    this.index = this.index + 1;
    if (this.index > 2) {
      this.index = 0
    }
    this.src = this.video[this.index].src;
  }

}
