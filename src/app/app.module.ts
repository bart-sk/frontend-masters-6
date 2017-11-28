import { NgModule, SystemJsNgModuleLoader } from '@angular/core';
import { AppComponent } from './app.component';
import { SongService } from './lib/song.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';

const APP_ROUTES: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'songs', loadChildren: 'app/songs/songs.module#SongsModule' },
  { path: 'lazy/song/edit', loadChildren: 'app/songs/song-edit/song-edit.module#SongEditModule' }
];

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent
  ],
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [
    SongService,
    SystemJsNgModuleLoader
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
