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
  currentIndex: number = 0;

  constructor(private galleryService: GalleryService) { }

  ngOnInit(): void {
    this.gallery = this.galleryService.getGallery();
    this.currentImage = this.gallery[0].img;
    console.log(this.gallery);
  }

  galleryForward(): void {
    if (this.currentIndex < this.gallery.length -1) {
      this.currentIndex++;
      let nextImage = this.gallery[this.currentIndex].img;
      this.currentImage = nextImage;
      this
    } else {
      this.currentIndex = 0;
      this.currentImage = this.gallery[0].img;
    }
  }

  galleryBackward(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      let prevImage = this.gallery[this.currentIndex].img;
      this.currentImage = prevImage;
    }
  }

}
