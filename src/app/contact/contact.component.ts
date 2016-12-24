import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export class Contact {
  id: number = 0;
  first_name: string = '';
  last_name: string = '';
  phone: number = 0;
}

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {
  @Input() contact: Contact = new Contact();
  @Output() onEdit = new EventEmitter<Contact>();
  @Output() onRemove = new EventEmitter<Contact>();

  constructor() {}

  ngOnInit() {
  }

  edit() {
    //trigger opening a modal
    this.onEdit.emit(this.contact);
    return false;
  }

  delete() {
    this.onRemove.emit(this.contact);
    return false;
  }

}
