import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityListComponent } from './pages/list/list.component';
import { CityItemComponent } from './pages/item/item.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { CityCardComponent } from './components/city-card/city-card.component';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CityRoutingModule } from './city-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { UiModule } from '../ui/ui.module';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from '../modal/modal.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [CityListComponent, CityItemComponent, CityCardComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    MatPaginatorModule,
    CityRoutingModule,
    MatButtonModule,
    UiModule,
    MatInputModule,
    ReactiveFormsModule,
    ModalModule,
    MatFormFieldModule,
    HttpClientModule,
  ],
  exports: [CityCardComponent, CityListComponent],
})
export class CityModule {}
