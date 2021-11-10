import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  // counter: number = 0;

  gallery: Array<Object> = [
    { 'img': '/assets/image-product-1.jpg', 'thumb': 'image-product-1-thumbnail.jpg' },
    { 'img': '/assets/image-product-2.jpg', 'thumb': 'image-product-2-thumbnail.jpg' },
    { 'img': '/assets/image-product-3.jpg', 'thumb': 'image-product-3-thumbnail.jpg' },
    { 'img': '/assets/image-product-4.jpg', 'thumb': 'image-product-4-thumbnail.jpg' }
  ]

  getGallery(): Array<Object> {
    return this.gallery;
  }

  test(index: number): any {
    return  this.gallery[index];
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
