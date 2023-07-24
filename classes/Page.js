import { Player } from "./Player.js";
import { Comment } from "./Comment.js";

export class Page
{
    user;
    constructor(user)
    {
        this.user=user;
    }
}

export class vidServPage extends Page
{
    channels=[];
    constructor(user,videoSerice)
    {
       super(user);
       this.channels=videoSerice.channels; 
    }
}
export class channPage extends Page
{
    channel;
    videos=[];
    constructor(user,channel)
    {
        super(user);
        this.channel=channel;
        this.videos=channel.videos;
    }
    Subscribe()
    {
      if(this.channel.subscribers.indexOf(this.user.name)==-1)
      {
       this.channel.subscribers.push(this.user.name); 
      } 
    }
    Unsubscribe()
    {
        if(this.channel.subscribers.indexOf(this.user.name)>-1)
        {
         this.channel.subscribers.splice(this.user.name,1); 
        }         
    }
}
export class vidPage extends Page
{
    player;
    constructor(user,video)
    {
        super(user);
        this.player=new Player(video);
    }
    Like()
    {
        if(this.user.isAnon==false)
        {
        let likedIndex=this.player.video.liked.indexOf(this.user.name);
        if(likedIndex==-1)
        {
            this.player.video.liked.push(this.user.name);
            let dislikedIndex=this.player.video.disliked.indexOf(this.user.name);
            if(dislikedIndex>-1)
            {
                this.player.video.disliked.splice(dislikedIndex,1);
            }
        }
        else
        {
            this.player.video.liked.splice(likedIndex,1);
        }
        }

    }
    Dislike()
    {
        if(this.user.isAnon==false)
        {
        let dislikedIndex=this.player.video.disliked.indexOf(this.user.name);
        if(dislikedIndex==-1)
        {
            this.player.video.disliked.push(this.user.name);
            let likedIndex=this.player.video.liked.indexOf(this.user.name);
            if(likedIndex>-1)
            {
                this.player.video.liked.splice(likedIndex,1);
            }
        }
        else
        {
            this.player.video.disliked.splice(dislikedIndex,1);
        }
        }
    }
    Comment(text)
    {
        if(this.user.isAnon==false)
        {
            this.player.video.comments.push(new Comment(this.user,text));
        }
    }
    Uncomment(text)
    {
        if(this.user.isAnon==false)
        {
            let delIndex=this.player.video.comments.findIndex(comm => comm.text === text);
            if(delIndex>=0)
            {
             this.player.video.comments.splice(delIndex,1);
            }
        }       
    }

}