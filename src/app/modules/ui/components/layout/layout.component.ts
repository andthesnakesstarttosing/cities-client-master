import { Component } from '@angular/core';
import { AuthService } from 'src/app/modules/auth/service/auth.service';
import { ModalService } from 'src/app/modules/modal/service/modal.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  providers: [ModalService],
})
export class LayoutComponent {
  constructor(public service: ModalService, public auth: AuthService) {}
}
