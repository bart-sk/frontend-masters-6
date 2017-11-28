import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Song } from '../../lib/song';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-song-edit',
  templateUrl: './song-edit.component.html',
  styleUrls: ['./song-edit.component.css']
})
export class SongEditComponent implements OnInit {

  @Input() song: Song;
    @Output() onSave: EventEmitter<Song> = new EventEmitter<Song>();
    @Output() onClose: EventEmitter<boolean> = new EventEmitter<boolean>();

  form: FormGroup;

  constructor(public formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      id: null,
      name: null,
      artist: null,
      year: null,
      genre: null,
      bpm: null,
      tags: null
    });
  }

  ngOnInit() {

    let tags = '';
    if(this.song.tags) {
      tags = this.song.tags.join('; ');
    }
    this.form.setValue({
      id: this.song.id,
      name: this.song.name,
      artist: this.song.artist,
      year: this.song.year,
      genre: this.song.genre,
      bpm: this.song.bpm,
      tags: tags
    });
  }

  save() {
    const data = this.form.getRawValue();
    this.song.name = data.name;
    this.song.artist = data.artist;
    this.song.genre = data.genre;
    this.song.year = data.year;
    this.song.bpm = data.bpm;
    this.song.tags = data.tags.split('; ');
    this.onSave.emit(this.song);
  }

  close() {
    this.onClose.emit(true);
  }
}
