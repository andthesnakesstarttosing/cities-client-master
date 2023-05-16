import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './modules/ui/components/layout/layout.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CityModule } from './modules/city/city.module';
import { ApiHttpInterceptor } from './interceptors/api-http.interceptor';
import { environment } from 'src/environments/environment';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { ModalModule } from './modules/modal/modal.module';
import { UiModule } from './modules/ui/ui.module';
import { AuthModule } from './modules/auth/auth.module';
import { ErrorModule } from './modules/error/error.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CityModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatIconModule,
    ModalModule,
    UiModule,
    AuthModule,
    ErrorModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiHttpInterceptor,
      multi: true,
    },
    {
      provide: 'BASE_API_URL',
      useValue: environment.baseUrl,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
