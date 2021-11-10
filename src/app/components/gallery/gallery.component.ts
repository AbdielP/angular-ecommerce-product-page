import { Component, OnInit } from '@angular/core';
import { GalleryService } from 'src/app/services/gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  gallery: Array<any> = [];
  currentImage: string = '';

  constructor(private galleryService: GalleryService) { 
    this.gallery = this.galleryService.getGallery();
    this.currentImage = this.gallery[0].img;
    // console.log(this.gallery);
  }

  ngOnInit(): void {
  }

  galleryForward(): void {
    console.log(this.galleryService.galleryForward())
    // this.currentImage = this.galleryService.galleryForward().img;
  }

  galleryBackward(): void {
    console.log(this.galleryService.galleryBackward())
    // this.currentImage = this.galleryService.galleryBackward().img;
  }

}
