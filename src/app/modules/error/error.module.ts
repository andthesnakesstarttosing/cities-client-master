import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { GlobalErrorComponent } from './components/global-error/global-error.component';
import { MatTooltipModule } from '@angular/material/tooltip';
@NgModule({
  declarations: [NotFoundComponent, GlobalErrorComponent],
  imports: [CommonModule],
  exports: [GlobalErrorComponent],
})
export class ErrorModule {}
