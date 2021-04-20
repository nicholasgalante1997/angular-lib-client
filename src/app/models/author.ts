export default class Author {
  name: string;
  authorId: number;
  mention: string;

  constructor(name: string, mention: string) {
    this.mention = mention;
    this.name = name;
  }

}
