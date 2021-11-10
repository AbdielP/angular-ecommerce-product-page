import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-lightbox',
  templateUrl: './lightbox.component.html',
  styleUrls: ['./lightbox.component.css']
})
export class LightboxComponent {

  gallery: Array<any> = [];
  currentImage: string = '';
  currentIndex: number = 0;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { 
    this.gallery = data.gallery;
    this.currentImage = data.gallery[0].img;
  }

  getImage(index: number): void {
    this.currentIndex = index;
    this.currentImage = this.gallery[index].img;
  }

  galleryBackward(): void{}

  galleryForward(): void{}

}
