import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  gallery: Array<object> = [
    { 'img': '/assets/image-product-1.jpg', 'thumb': 'image-product-1-thumbnail.jpg' },
    { 'img': '/assets/image-product-2.jpg', 'thumb': 'image-product-2-thumbnail.jpg' },
    { 'img': '/assets/image-product-3.jpg', 'thumb': 'image-product-3-thumbnail.jpg' },
    { 'img': '/assets/image-product-4.jpg', 'thumb': 'image-product-4-thumbnail.jpg' }
  ]

  getGallery(): Array<object> {
    return this.gallery;
  }
}
