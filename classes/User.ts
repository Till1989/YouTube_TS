export class User
{
  name: string
  isAnon: Boolean;
  constructor(name: string,type: Boolean)
  {
    this.name=name;
    this.isAnon=type;
  }
}