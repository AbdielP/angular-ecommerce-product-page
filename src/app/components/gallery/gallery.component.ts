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
  currentIndex: number = 0;

  constructor(private galleryService: GalleryService, public dialog: MatDialog) { 
    this.gallery = this.galleryService.getGallery();
    this.currentImage = this.gallery[0].img;
    // this.openDialog();
  }

  galleryForward(): void {
    if (this.currentIndex < this.gallery.length -1) {
      this.currentIndex++;
      this.currentImage = this.gallery[this.currentIndex].img;
    } else {
      this.currentIndex = 0;
      this.currentImage = this.gallery[0].img; 
    }
  }

  galleryBackward(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.currentImage = this.gallery[this.currentIndex].img;
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(LightboxComponent, {
      data: { gallery: this.gallery }
    });

    // dialogRef.afterClosed().subscribe(result => {});
  }

}
