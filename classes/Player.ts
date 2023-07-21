import { Video } from "./Video";

export class Player
{
  video: Video;
  constructor(video: Video)
  {
   this.video=video;
  }
  Play()
  {
    this.video.Load();
  }
  Pause()
  {
 
  }
  Stop()
  {
  
  }
}