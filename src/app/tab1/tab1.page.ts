import { Component } from '@angular/core';
import { PhotoService } from '../services/photo/photo.service';
import { UserPhoto } from '../types';
import { NotifierService } from '../services/notifier/notifier.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  currentPic!: UserPhoto;

  constructor(
    private photoService: PhotoService,
    private notifier: NotifierService
  ) {}

  addPhotoToGallery() {
    this.photoService.addNewToGallery().then((res) => {
      this.currentPic = res;
      this.notifier.success('Image saved successfully');
    }).catch(err => {
      console.log(err)
      this.notifier.error('Error while fetching image');
    })
  }

}
