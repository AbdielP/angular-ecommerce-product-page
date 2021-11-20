import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu'; 

const materialComponents = [
  MatToolbarModule,
  MatSidenavModule,
  MatButtonModule,
  MatDialogModule,
  MatMenuModule
];

@NgModule({
  declarations: [],
  imports: [ CommonModule, materialComponents ],
  exports: [ materialComponents ]
})
export class MaterialModule { }
