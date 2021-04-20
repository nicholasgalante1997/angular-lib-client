export default class Book {
  bookId: number;
  authorId: number;
  genreId: number;
  title: string;
  synopsis: string;
  coverUrl: string;

  constructor(
    authorId: number,
    genreId: number,
    title: string,
    synopsis: string,
    coverUrl: string
  ){
    this.authorId = authorId;
    this.genreId = genreId,
    this.title = title,
    this.synopsis = synopsis,
    this.coverUrl = coverUrl;
  }
}
