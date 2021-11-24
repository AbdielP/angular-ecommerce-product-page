import { GalleryService } from 'src/app/services/gallery.service';
import { MatDialog } from '@angular/material/dialog';
import { Component, HostListener, Input } from '@angular/core';
import { LightboxComponent } from 'src/app/components/lightbox/lightbox.component';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {

  @Input() callLightbox: boolean;

  gallery: Array<any> = [];
  currentImage: string = '';
  currentIndex: number = 0;
  width: number;

  constructor(private galleryService: GalleryService, public dialog: MatDialog) { 
    this.gallery = this.galleryService.getGallery();
    this.currentImage = this.gallery[0].img;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.width = event.target.innerWidth;
  }

  ngAfterViewInit(): void {
    this.width = window.innerWidth;
  }

  galleryBackward(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.currentImage = this.gallery[this.currentIndex].img;
    }
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

  getImage(index: number): void {
    this.currentIndex = index;
    this.currentImage = this.gallery[index].img;
  }

  openDialog(): void {
    if( this.callLightbox && this.width >= 550 ) {
      this.dialog.open(LightboxComponent, {
        data: { gallery: this.gallery },
        panelClass: ['gallery__img--resize', 'thumbnails--resize', 'thumbnail-width', 'gallery__button--top', 
        'button--left', 'button--right']
      });
    }
  }

}
