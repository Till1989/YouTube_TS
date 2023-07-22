import { Coment } from "./Comment.js";
import { User } from "./User.js";

export class Video
{
  name: string;
  description: string;
  liked: string[]=[];
  disliked: string[]=[];
  comments: Coment[]=[];
  watchedCount: number;
  
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
}

export class FullVideo extends Video
{
  Load()
  {
    console.log("loading 25%");
    console.log("loading 50%");
    console.log("loading 75%");
    console.log("loading 100%");
  }
}

export class Shorts extends Video
{
  Load()
  {
    console.log("loading 100%");
  }
}