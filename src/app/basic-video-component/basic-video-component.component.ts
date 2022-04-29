import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-basic-video-component',
  templateUrl: './basic-video-component.component.html',
  styles: []
})

/**
 * the basic video component is used with a videoname as input string. The video itself is then loaded from 
 * a path specified below in the ngOnInit() function. Use the full video name with file extension, i.e. demo.mp4.
 */
export class BasicVideoComponentComponent implements OnInit {

  @Input()
  videoname: string;

  video_assets_folder: string;
  videopath: string;

  constructor() { }

  ngOnInit() {
    /* this path currently loads from a server hosted by the minf group, change this to local path for development */
    this.video_assets_folder = "http://www.minf.uni-bamberg.de/recordings/ws2020/Blender/Update_2022/";
    this.videopath = this.video_assets_folder + this.videoname;
  }

}
