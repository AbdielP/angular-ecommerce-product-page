import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  imgIndex: number = 1;

  gallery: Array<Object> = [
    { 'img': '/assets/image-product-1.jpg', 'thumb': '/assets/image-product-1-thumbnail.jpg' },
    { 'img': '/assets/image-product-2.jpg', 'thumb': '/assets/image-product-2-thumbnail.jpg' },
    { 'img': '/assets/image-product-3.jpg', 'thumb': '/assets/image-product-3-thumbnail.jpg' },
    { 'img': '/assets/image-product-4.jpg', 'thumb': '/assets/image-product-4-thumbnail.jpg' }
  ]

  getGallery(): Array<Object> {
    return this.gallery;
  }

  galleryForward(): any {
    // return this.imgIndex = this.imgIndex+1;
    let nextImage = this.gallery[this.imgIndex];
    if(this.imgIndex < this.gallery.length -1) {
      this.imgIndex = this.imgIndex+1
    } else {
      this.imgIndex = 0;
    }
    return nextImage;
  }

  galleryBackward(): any {
    if (this.imgIndex > 1) {
      this.imgIndex = this.imgIndex -1;
      let prevImage = this.gallery[this.imgIndex];
      return prevImage;
    }
    // return this.imgIndex = this.imgIndex-1;
  }

  // test(): any {
  //   console.log(this.counter);
  //   if (this.counter < this.gallery.length) {
  //   let nextImage = this.gallery[this.counter];
  //     this.counter++;
  //     console.log(this.counter)
  //     return nextImage;
  //   }
  //   return this.gallery[0];
  // }
}
