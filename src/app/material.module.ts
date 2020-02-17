import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';

import { AgmCoreModule   } from '@agm/core';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatInputModule,
    MatDialogModule,
    MatCardModule,
    AgmCoreModule.forRoot({ apiKey:  'AIzaSyAIteKmRhDrbBmAbXdmraE6BgmpNR44ZWw' })
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatSnackBarModule,
    MatDialogModule,
    MatProgressBarModule,
    MatInputModule,
    MatCardModule,
    AgmCoreModule
  ]
})
export class MaterialModule { }
