import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongEditComponent } from './song-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    MAT_PLACEHOLDER_GLOBAL_OPTIONS, MatButtonModule, MatCardModule, MatFormFieldModule,
    MatInputModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule
  ],
  entryComponents: [
      SongEditComponent
  ],
  providers: [
    {provide: MAT_PLACEHOLDER_GLOBAL_OPTIONS, useValue: {float: 'always'}}
  ],
  declarations: [SongEditComponent]
})
export class SongEditModule {
    static entry = SongEditComponent;
}
