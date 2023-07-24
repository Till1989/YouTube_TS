import { Channel } from "./Channel.js";
import { User } from "./User.js";

export class VideoService
{
  name: string;
  channels: Channel[]=[];
  users: User[]=[];
 constructor (name: string)
  {
   this.name=name;
  }
  AddChannel(channel: Channel)
  {
   this.channels.push(channel);
  }
  RemoveChannel(name: string)
  {
    let index: number;
    for(let i:number=0;i<this.channels.length;i++)
    {
      if(this.channels[i].name===name)
      {
        index=i;
        break;
      }
    }
    this.channels.splice(index,1);
  }
  AddUser(user: User)
  {
    this.users.push(user);
  }
  RemoveUser(name: string)
  {
    let index: number;
    for(let i:number=0;i<this.channels.length;i++)
    {
      if(this.channels[i].name===name)
      {
        index=i;
        break;
      }
    }
   this.users.splice(index,1);
  }

}