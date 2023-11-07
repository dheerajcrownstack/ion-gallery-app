import { Component } from '@angular/core';
import { PhotoService } from '../services/photo/photo.service';
import { UserPhoto } from '../types';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  currentPic!: UserPhoto;

  constructor(
    private photoService: PhotoService
  ) {}

  addPhotoToGallery() {
    this.photoService.addNewToGallery().then((res) => {
      this.currentPic = res;
    }).catch(err => {
      console.log(err)
    })
  }

}
