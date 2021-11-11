import { GalleryService } from 'src/app/services/gallery.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  gallery: Array<any> = [];
  currentImage: string = '';
  currentIndex: number = 0;

  constructor(private galleryService: GalleryService) { 
    this.gallery = this.galleryService.getGallery();
    this.currentImage = this.gallery[0].img;
  }

  ngOnInit(): void {
  }

}
