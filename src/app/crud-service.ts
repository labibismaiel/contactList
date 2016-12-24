import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class CrudService {

  public getList() {
    return this.af.database.list('/');
  }

  public editContact(contact) {
    let c = {};
    for(let key in contact) {
      if(contact.hasOwnProperty(key)) {
        if(typeof contact[key] != 'function' && !key.startsWith('$')) {
          c[key] = contact[key];
        }
      }
    }
    return this.af.database.list('/').update(contact.$key, c);
  }

  public removeContact(contact) {
    return this.af.database.list('/').remove(contact.$key);
  }

  public addContact(contact) {
    return this.af.database.list('/').push(contact);
  }

  constructor(public af: AngularFire) {

  }

}
