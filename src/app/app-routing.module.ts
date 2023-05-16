import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './modules/ui/components/layout/layout.component';
import { CityRoutingModule } from './modules/city/city-routing.module';
import { NotFoundComponent } from './modules/error/pages/not-found/not-found.component';

export enum AppRoutes {
  CITIES = 'cities',
  NOT_FOUND = '404',
}

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: AppRoutes.CITIES,
        loadChildren: () => CityRoutingModule,
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: AppRoutes.CITIES,
      },
      {
        path: AppRoutes.NOT_FOUND,
        component: NotFoundComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
