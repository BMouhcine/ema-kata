import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Video } from '../video.model';
import { VideoService } from '../videoservice/video.service';


@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})


export class VideoComponent implements OnInit {

  videos: Video[];

  constructor(private router: Router, private videoService: VideoService) {

  }
  
  onSubmit(data){
  	
  	if(data.tags==null){
  		data.tags="";
  	}if(data.level==null){
  		data.level="";
  	}
  
  	if(data.tags.length==0 && data.level.length==0){
  	    this.videoService.getAllVideos()
	      .subscribe( data => {
		this.videos = data;
		console.log(this.videos);
	      });
  	}else{
  		this.videoService.getVideos(data.level, data.tags)
	      .subscribe( data => {
		this.videos = data;
		console.log(this.videos);
	      });
  	}

  }

  ngOnInit() {
   // this.videoService.getVideos()
    //  .subscribe( data => {
     //   this.videos = data;
      //  console.log(this.videos);
      //});
      
  };


}
