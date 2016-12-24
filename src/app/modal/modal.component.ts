import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  exportAs: 'child'
})
export class ModalComponent implements OnInit {
  @ViewChild('lgModal') public childModal:ModalDirective;
  @Input() contact = {
    id: 0,
    first_name: '',
    last_name: '',
    phone: 0
  };
  @Output() onSave = new EventEmitter();

  public modalTitle = "Add New Contact";

  constructor() { }

  ngOnInit() {
  }

  public showModal() {
    this.childModal.show();
  }

  public hideModal() {
    this.childModal.hide();
  }

  public save() {
    this.onSave.emit(this.contact);
  }

}
