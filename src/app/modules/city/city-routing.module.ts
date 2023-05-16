import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityListComponent } from './pages/list/list.component';
import { CityItemComponent } from './pages/item/item.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: CityListComponent,
  },
  {
    path: ':id',
    component: CityItemComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CityRoutingModule {}
