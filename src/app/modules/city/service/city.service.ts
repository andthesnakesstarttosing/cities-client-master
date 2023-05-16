import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ICity } from 'src/app/models/city.model';
import { AuthService } from '../../auth/service/auth.service';
import { IPageResponse } from 'src/app/models/page.response';

@Injectable({
  providedIn: 'root',
})
export class CityService {
  private readonly endPoint = '/api/v1/cities';
  public page: number = 0;
  public searchQuery = '';
  constructor(
    private readonly http: HttpClient,
    private readonly authService: AuthService
  ) {}

  findByPage(): Observable<IPageResponse<ICity>> {
    return this.http.get<IPageResponse<ICity>>(
      `${this.endPoint}?page=${this.page}&size=20&name=${this.searchQuery}`
    );
  }

  findById(id: number): Observable<ICity> {
    return this.http.get<ICity>(`${this.endPoint}/${id}`);
  }

  patchCity(id: number, body: Partial<Omit<ICity, 'id'>>) {
    const headers = new HttpHeaders().set(
      'Authorization',
      this.authService.generateAccessToken()
    );
    return this.http.patch<ICity>(`${this.endPoint}/${id}`, body, {
      headers,
    });
  }
}
