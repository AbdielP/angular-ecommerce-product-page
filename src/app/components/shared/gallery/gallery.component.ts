import { GalleryService } from 'src/app/services/gallery.service';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {

  @ViewChild('mainImg', {static: false}) img: ElementRef;

  gallery: Array<any> = [];
  currentImage: string = '';
  currentIndex: number = 0;

  constructor(private galleryService: GalleryService) { 
    this.gallery = this.galleryService.getGallery();
    this.currentImage = this.gallery[0].img;
  }

  galleryBackward(): void {}
  galleryForward(): void {}

  openDialog(): void {
    if( this.img.nativeElement.classList.contains('test') ) {
      console.log('mostrar lightbox')
    } 
  }

 

}
