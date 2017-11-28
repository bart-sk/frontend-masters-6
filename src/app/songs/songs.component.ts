import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Song } from '../lib/song';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SongsComponent {

  @Output() onEdit: EventEmitter<Song> = new EventEmitter<Song>();
  @Input() songs: Array<Song>;

  trackByFn(index: number, song: Song) {
    return song.name + song.year;
  }

}
