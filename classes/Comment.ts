import { User } from "./User";

export class Coment
{
  user: User;
  text: string;
  constructor(user: User,text: string)
  {
    this.user=user;
    this.text=text;
  }
}
