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
  actualIndex: number = 0;

  constructor(private galleryService: GalleryService) { 
    this.gallery = this.galleryService.getGallery();
    this.currentImage = this.gallery[0].img;
  }

  ngOnInit(): void {
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

}
