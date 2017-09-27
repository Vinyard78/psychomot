import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { ExamensPage } from '../pages/examens/examens';
import { ExamenForm } from '../pages/examens/examenForm';
import { TabsPage } from '../pages/tabs/tabs';
import { SocialSharing } from '@ionic-native/social-sharing';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    ExamensPage,
    TabsPage,
    ExamenForm
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ExamensPage,
    ExamenForm
  ],
  providers: [SocialSharing, {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
