import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from './components/modal/modal.component';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { LayoutComponent } from './components/layout/layout.component';
import { MatIconModule } from '@angular/material/icon';
import { ErrorModule } from '../error/error.module';
import { AuthModule } from '../auth/auth.module';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [SearchBarComponent, ModalComponent, LayoutComponent],
  imports: [
    CommonModule,
    MatInputModule,
    FormsModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    ErrorModule,
    AuthModule,
    AppRoutingModule,
  ],
  exports: [SearchBarComponent, ModalComponent],
})
export class UiModule {}
