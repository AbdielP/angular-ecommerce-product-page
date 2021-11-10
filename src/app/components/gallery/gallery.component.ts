import { Component, OnInit } from '@angular/core';
import { GalleryService } from 'src/app/services/gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  gallery: Array<any> = [];
  actualImage: string = '';
  actualIndex: number = 0;

  constructor(private galleryService: GalleryService) { }

  ngOnInit(): void {
    this.gallery = this.galleryService.getGallery();
    this.actualImage = this.gallery[0].img;
    console.log(this.gallery);
  }

  galleryForward(): void {
    if (this.actualIndex < this.gallery.length -1) {
      this.actualIndex++;
      let nextImage = this.gallery[this.actualIndex].img;
      this.actualImage = nextImage;
    } else {
      this.actualIndex = 0;
      this.actualImage = this.gallery[0].img;
    }
  }

  galleryBackward(): void {
    if (this.actualIndex > 0) {
      this.actualIndex--;
      let prevImage = this.gallery[this.actualIndex].img;
      this.actualImage = prevImage;
    }
  }

}
