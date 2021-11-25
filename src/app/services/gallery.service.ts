import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  imgIndex: number = 1;

  gallery: Array<Object> = [
    { 'img': 'assets/image-product-1.jpg', 'thumb': 'assets/image-product-1-thumbnail.jpg' },
    { 'img': 'assets/image-product-2.jpg', 'thumb': 'assets/image-product-2-thumbnail.jpg' },
    { 'img': 'assets/image-product-3.jpg', 'thumb': 'assets/image-product-3-thumbnail.jpg' },
    { 'img': 'assets/image-product-4.jpg', 'thumb': 'assets/image-product-4-thumbnail.jpg' }
  ]

  getGallery(): Array<Object> {
    return this.gallery;
  }
}
