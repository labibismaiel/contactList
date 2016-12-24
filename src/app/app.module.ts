import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './components/app/app.component';

import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';
import { ModalModule } from 'ng2-bootstrap/modal';

import { AngularFireModule } from 'angularfire2';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactComponent } from './contact/contact.component';
import { ModalComponent } from './modal/modal.component';
import { SimpleNotificationsModule } from 'angular2-notifications'

export const firebaseConfig = {
  apiKey: "AIzaSyCzPGw6L9ALEGiNmFpraW1WZywo2MWlio4",
  authDomain: "contacts-6c3d3.firebaseapp.com",
  databaseURL: "https://contacts-6c3d3.firebaseio.com",
  storageBucket: "contacts-6c3d3.appspot.com",
  messagingSenderId: "399334194246"
};

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    ContactComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AlertModule.forRoot(),
    ModalModule.forRoot(),
    SimpleNotificationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
