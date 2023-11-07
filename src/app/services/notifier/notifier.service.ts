import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class NotifierService {

  constructor(
    private toastCtrl: ToastController
  ) { }

  async success(message: string, ) {
    const toast = await this.toastCtrl.create({
      message: message || 'Hello World!',
      color: 'success',
      duration: 1500,
      position: 'top',
    })
    await toast.present();
  }

  async error(message: string) {
    const toast = await this.toastCtrl.create({
      message: message || 'Hello World!',
      color: 'danger',
      duration: 1500,
      position: 'top',
    })
    await toast.present();
  }
}
