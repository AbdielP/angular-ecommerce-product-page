import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GalleryService } from 'src/app/services/gallery.service';
import { LightboxComponent } from 'src/app/components/lightbox/lightbox.component';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {

  gallery: Array<any> = [];
  currentImage: string = '';
  actualIndex: number = 0;

  constructor(private galleryService: GalleryService, public dialog: MatDialog) { 
    this.gallery = this.galleryService.getGallery();
    this.currentImage = this.gallery[0].img;
    this.openDialog();
  }

  galleryForward(): void {
    if (this.actualIndex < this.gallery.length -1) {
      this.actualIndex++;
      this.currentImage = this.gallery[this.actualIndex].img;
    } else {
      this.actualIndex = 0;
      this.currentImage = this.gallery[0].img; 
    }
  }

  galleryBackward(): void {
    if (this.actualIndex > 0) {
      this.actualIndex--;
      this.currentImage = this.gallery[this.actualIndex].img;
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(LightboxComponent, {
      data: { gallery: this.gallery },
      panelClass: 'bro'
    });

    // dialogRef.afterClosed().subscribe(result => {});
  }

}
