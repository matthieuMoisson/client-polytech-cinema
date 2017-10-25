import {Component, Input} from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'ngbd-modal-content',
    templateUrl: './app-form.modal.html',
  })
  export class NgbdModalContent {
    @Input() type;
  
    constructor(public activeModal: NgbActiveModal) {}
  }