import { Video } from "./Video.js";

export class Player
{
  video: Video;
  constructor(video: Video)
  {
   this.video=video;
   this.video.watchedCount++;
  }
  Play()
  {
    this.video.Load();
    this.video.watchedCount++;
  }
  Pause()
  {
 
  }
  Stop()
  {
  
  }
}