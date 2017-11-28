import {
  Component, Injector, NgModuleFactory, OnInit, SystemJsNgModuleLoader, ViewChild,
  ViewContainerRef
} from '@angular/core';
import { Song } from '../../lib/song';
import { SongService } from '../../lib/song.service';

@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.css']
})
export class DasboardComponent implements OnInit {
  @ViewChild('list', {read: ViewContainerRef}) listContainer: ViewContainerRef;
  @ViewChild('edit', {read: ViewContainerRef}) editContainer: ViewContainerRef;

  mode: string = 'empty';
  editRef: any = null;
  listRef: any = null;

  songs: Array<Song> = [];

  constructor(private loader: SystemJsNgModuleLoader, private inj: Injector, private songService: SongService) {
    /**/
  }

  ngOnInit() {

    // this.lazyList();

    this.songService.loadSongs().subscribe((data: Array<Song>) => {
      this.updateList(data);
    });

  }

  updateList(data: Array<Song>) {
    this.songs = data;
    if (this.listRef) {
      this.songs[0].name = 'test';
      this.listRef.instance['songs'] = this.songs;
    }
  }

  lazyEdit(song: Song) {
    this.closeEdit();
    this.loader.load('app/songs/song-edit/song-edit.module#SongEditModule').then((moduleFactory: NgModuleFactory<any>) => {

      this.mode = 'edit';
      const entryComponent = (<any>moduleFactory.moduleType).entry;
      const moduleRef = moduleFactory.create(this.inj);
      const compFactory = moduleRef.componentFactoryResolver.resolveComponentFactory(entryComponent);
      const reference = this.editContainer.createComponent(compFactory);
      this.editRef = reference;
      reference.instance['song'] = song;
      this.editRef.instance['onSave'].subscribe((s: Song) => {
        this.songService.update(s).subscribe((data: Array<Song>) => {
          this.closeEdit();
          this.updateList(data);
        });
      });
      this.editRef.instance['onClose'].subscribe(() => {
        this.closeEdit();
      });
    });
  }

  closeEdit() {
    if(this.editRef) {
      this.editRef.destroy();
      this.mode = 'filter';
    }
  }

  lazyList() {
    this.loader.load('app/songs/songs.module#SongsModule').then((moduleFactory: NgModuleFactory<any>) => {
      const entryComponent = (<any>moduleFactory.moduleType).entry;
      const moduleRef = moduleFactory.create(this.inj);
      const compFactory = moduleRef.componentFactoryResolver.resolveComponentFactory(entryComponent);
      this.listRef = this.listContainer.createComponent(compFactory);

      this.listRef.instance['songs'] = this.songs;
      this.listRef.instance['onEdit'].subscribe((song: Song) => {
        this.lazyEdit(song);
      });
    });
  }
}
