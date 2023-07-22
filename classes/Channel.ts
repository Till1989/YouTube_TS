import { User } from "./User";
import { Video } from "./Video";

export class Channel
{
 name: string;
 videos: Video[]=[];
 subscribers: User[]=[];
 constructor (name: string)
  {
   this.name=name;
  }
 AddVideo(video: Video)
  {
   this.videos.push(video);
  }
 RemoveVideo(name: string)
  {
    let index: number;
    for(let i:number=0;i<this.videos.length;i++)
    {
      if(this.videos[i].name===name)
      {
        index=i;
        break;
      }
    }
    this.videos.splice(index,1);
  }  
 Subscribe(user: User)
 {
  if(user.isAnon==false)
  {
    this.subscribers.push(user);
  }
 }
 Unsubscribe(user: User)
 {
  let name: string = user.name;
  let index: number;
  for(let i:number=0;i<this.subscribers.length;i++)
  {
    if(this.subscribers[i].name===name)
    {
      index=i;
      break;
    }
  }
  this.subscribers.splice(index,1);
 }

}