import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Video } from '../video.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private http:HttpClient) {}

  private videoUrl = 'https://localhost:8888/api/v1';

  public getVideos(level, tags) {
	var findUrl = this.videoUrl + "/videos?";
   if(level.length==0){
   	findUrl = findUrl + "tags=" + tags;
   }else{
   	findUrl = findUrl + "level="+ level + "&tags=" + tags;
  
   }
    
    return this.http.get<Video[]>(findUrl);
  }
  
  public getAllVideos(){
    	let allUrl = this.videoUrl + "/allvideos";
  	return this.http.get<Video[]>(allUrl); 
  }
}




