import { User } from "./User.js";

export class Comment
{
  user: User;
  text: string;
  constructor(user: User,text: string)
  {
    this.user=user;
    this.text=text;
  }
}
