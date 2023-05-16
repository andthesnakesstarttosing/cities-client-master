import { Component } from '@angular/core';
import { ModalService } from 'src/app/modules/modal/service/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  constructor(public modalService: ModalService) {}
}
