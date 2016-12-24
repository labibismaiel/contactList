import { Component, OnInit, ViewChild } from '@angular/core';
import { CrudService } from '../crud-service';
import { ModalComponent } from '../modal/modal.component';
import { NotificationsService } from '../../../node_modules/angular2-notifications'

@Component({
  selector: 'contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  providers: [CrudService]
})

export class ContactsComponent implements OnInit {
  public items: any = [];
  public contact: any = {};
  public confirm: boolean = false;
  @ViewChild(ModalComponent) public modalComponent: ModalComponent;
  public options = {
    position: ["bottom", "right"],
    timeOut: 3000,
    lastOnBottom: true
  }

  public onEdit(contact: any) {
    this.contact = contact;
    this.modalComponent.showModal();
  }

  public add() {
    this.contact = {};
    this.modalComponent.showModal();
  }

  constructor(public crudService: CrudService, private notificationsService: NotificationsService) {
    var self = this;
    crudService.getList().subscribe(
      list => {
        this.items = list;
      },
      error => {
        self.notificationsService.error('Something Went Wrong', 'Please Try Again');
      }
    );
  }

  onSave(contact) {
    var self = this;
    var action = contact.$key ? 'editContact' : 'addContact';
    var msg = contact.$key ? 'Edit' : 'Add';

    this.crudService[action](contact)
    .then(val => {
      this.modalComponent.hideModal();
      self.notificationsService.success('Contact ' + msg + 'ed Successfully', contact.first_name + ' ' + contact.last_name);
    })
    .catch(err => {
      self.notificationsService.error( 'Something Went Wrong', 'Failed to ' + msg + ' Contact');
    });
  }

  onRemove(contact) {
    this.contact = contact;
    this.confirm = true;
  }

  onConfirm(selection, contact) {
    this.confirm = false;
    var self = this;
    if(selection && contact) {
      this.crudService.removeContact(contact)
      .then(val => {
        self.notificationsService.success('Contact Removed Successfully', contact.first_name + ' ' + contact.last_name);
      })
      .catch(err => {
        self.notificationsService.error( 'Something Went Wrong', 'Failed to Remove Contact');
      });
    }
  }

  ngOnInit() {
  }

}
