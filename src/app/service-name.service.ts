import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';



@Injectable({
  providedIn: 'root'
})
export class ServiceNameService {

  msg:any;
  handlerMessage = '';

  constructor(private toastController:ToastController,
    private alertController: AlertController) { }

  
  async presentToaster(msg : any){
    const toast = await this.toastController.create({
      message: msg,
      duration: 1500,
    });

    await toast.present();
  }
  async presentAlert(msg:any) {
    const alert = await this.alertController.create({
      header: 'Alert!',
      message: msg,
      buttons: [
        {
          text: 'Ok',
          role: 'ok',
          handler: () => {
            this.handlerMessage = 'Alert canceled';
          },
        },
        ],
      
    });

    await alert.present();
  }
}
  

