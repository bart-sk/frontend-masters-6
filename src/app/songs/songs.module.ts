import { NgModule } from '@angular/core';
import { MatButtonModule, MatExpansionModule } from '@angular/material';
import { GetAgePipe } from '../lib/get-age.pipe';
import { SongsComponent } from './songs.component';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DasboardComponent } from './dasboard/dasboard.component';

const SONGS_ROUTES: Routes = [
  {path: '', component: DasboardComponent}
];


@NgModule({
  declarations: [
    GetAgePipe,
    SongsComponent,
    DasboardComponent
  ],
  entryComponents: [
    SongsComponent
  ],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatButtonModule,
    RouterModule.forChild(SONGS_ROUTES),
    MatExpansionModule
  ],
  providers: [
  ],
  exports: [
    SongsComponent
  ],
  bootstrap: []
})
export class SongsModule {
  static entry = SongsComponent;
}
