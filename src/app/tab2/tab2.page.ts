import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from '../store';
import { getPhotos } from '../store/photo/photo.selector';
import { NotifierService } from '../services/notifier/notifier.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  gallery: any[] = [];

  constructor(
    private store: Store<IAppState>,
    private notifier: NotifierService
  ) {}

  ionViewWillEnter(): void {
    this.store.select(getPhotos).subscribe((res) => {
      this.gallery = res;
      if(!this.gallery.length) {
        this.notifier.error('No Image found')
      }
    })
  }

}
