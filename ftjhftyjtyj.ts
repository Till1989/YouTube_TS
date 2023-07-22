/*class User
{
  name: string
  isAnon: Boolean;
  constructor(name: string,type: Boolean)
  {
    this.name=name;
    this.isAnon=type;
  }
}*/
/****************************************************************************************************/
/*class VideoService
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

}*/
/***********************************************************************************************************/
/*class Video
{
  name: string;
  description: string;
  liked: string[]=[];
  disliked: string[]=[];
  comments: Coment[]=[];
  watchedCount: number=0;
  
  constructor(name: string)
  {
    this.name=name;
  }
  Load(){}

  Like(user: User)
  {
    if(user.isAnon==false)
    {
      let likedIndex=this.liked.indexOf(user.name);
      if(likedIndex==-1)
      {
          this.liked.push(user.name);
          let dislikedIndex=this.disliked.indexOf(user.name);
          if(dislikedIndex>-1)
          {
              this.disliked.splice(dislikedIndex,1);
          }
      }
      else
      {
          this.liked.splice(likedIndex,1);
      }
    }
  }

  Dislike(user: User)
  {
    if(user.isAnon==false)
    {
      let dislikedIndex=this.disliked.indexOf(user.name);
      if(dislikedIndex==-1)
      {
          this.disliked.push(user.name);
          let likedIndex=this.liked.indexOf(user.name);
          if(likedIndex>-1)
          {
              this.liked.splice(likedIndex,1);
          }
      }
      else
      {
          this.disliked.splice(dislikedIndex,1);
      }
    }    
  }

  Comment(user: User,text: string)
  {
    if(user.isAnon==false)
    {
        this.comments.push(new Coment(user, text));
    }
  }
  Uncomment(user: User,text: string)//Тут нужно будет дорабатывать. 
  {
    if(user.isAnon==false)
    {
      let temp=[];
      for(let i=0;i<this.comments.length;i++)
      {
        if(this.comments[i].user===user)
        {
        temp.push(i);
        }
      }
      for(let i=0;i<temp.length;i++)
      {
        if(this.comments[temp[i]].text==text)
        {
          this.comments.splice(temp[i],1);
          break;
        }
      }
    }  
    
  }
}*/

/*class FullVideo extends Video
{
  Load()
  {
    console.log("loading 25%");
    console.log("loading 50%");
    console.log("loading 75%");
    console.log("loading 100%");
  }
}*/

/*class Shorts extends Video
{
  Load()
  {
    console.log("loading 100%");
  }
}*/
/*************************************************************************************************************/
/*class Player
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
  }
  Pause()
  {
 
  }
  Stop()
  {
  
  }
}*/
/********************************************************************************************************* */
/*class Coment
{
  user: User;
  text: string;
  constructor(user: User,text: string)
  {
    this.user=user;
    this.text=text;
  }
}*/
/********************************************************************************************************** */
/*class Channel
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

}*/
/************************************************************************************************************ */




















/*
usr = new User("11111111",false);
usr1 = new User("22222222",false);

vidSrv = new VideoServices("YouTube");
vidSrv.AddChannel(new Channel("ВелоМотоОгород"));
chanIndex=vidSrv.channels.findIndex(ch=>ch.name=="ВелоМотоОгород");
    /*for(let i:number=0;i<vidSrv.channels.length;i++)
    {
      if(vidSrv.channels[i].name==="ВелоМотоОгород")
      {
        chanIndex=i;
        break;
      }
    }*/
/*
vidSrv.channels[chanIndex].AddVideo(new FullVideo("Посадил и офигел! 100% работает! Не спам!"));
vidSrv.channels[chanIndex].AddVideo(new Shorts("Бла-бла-бла"));
vidIndex=vidSrv.channels[chanIndex].videos.findIndex(vid=>vid.name=="Посадил и офигел! 100% работает! Не спам!");
/*for(let i:number=0;i<vidSrv.channels[chanIndex].videos.length;i++)
{
  if(vidSrv.channels[chanIndex].videos[i].name==="Бла-бла-бла")
  {
    vidIndex=i;
    break;
  }
}*//*
vidSrv.channels[chanIndex].videos[vidIndex].Comment(usr,"zsdfsfzvgfsdvszfdvzsvzsvsdfv");
vidSrv.channels[chanIndex].videos[vidIndex].Like(usr1);
vidSrv.channels[chanIndex].Subscribe(usr1);

plr= new Player(vidSrv.channels[chanIndex].videos[vidIndex]);
plr.Play();
plr= new Player(vidSrv.channels[chanIndex].videos[vidIndex]);




console.log(vidSrv);
console.log(plr);*/