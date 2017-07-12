import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { AdMob } from '@ionic-native/admob';

interface AdMobType {
  banner: string,
  interstitial: string
};

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private admob: AdMob) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      var admobid : AdMobType ;
      if (/(android)/i.test(navigator.userAgent)) {
        admobid = {
          banner: 'ca-app-pub-4602254446823125~7522334099',
          interstitial: 'ca-app-pub-4602254446823125~7522334099'
        };
      }

      this.admob.createBanner({
        adId: admobid.banner,
        isTesting: true,
        autoShow: true
      });

    });
  }
}
