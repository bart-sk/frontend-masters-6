export class Song {
  id: number;
  name: string;
  artist: string;
  year: number;
  genre: string;
  bpm: number;
  tags: string[];

  constructor(id: number, name: string, artist: string, year: number, genre: string, bpm: number, tags?: string[]) {
    this.id = id;
    this.name = name;
    this.artist = artist;
    this.year = year;
    this.genre = genre;
    this.bpm = bpm;
    this.tags = tags;
  }

  getAge() {
    console.log('method getAge');
    return (new Date()).getFullYear() - this.year;
  }
}

