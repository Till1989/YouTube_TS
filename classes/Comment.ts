import { User } from "./User";

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
