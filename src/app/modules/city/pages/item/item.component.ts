import { Component, OnInit } from '@angular/core';
import { CityService } from '../../service/city.service';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { ICity } from 'src/app/models/city.model';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalService } from 'src/app/modules/modal/service/modal.service';
import { ErrorService } from 'src/app/modules/error/service/error.service';

@Component({
  selector: 'app-city-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  providers: [ModalService],
})
export class CityItemComponent implements OnInit {
  form!: FormGroup;
  id!: number;
  city$!: Observable<ICity>;
  constructor(
    private readonly service: CityService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    public modalService: ModalService,
    private readonly errorService: ErrorService
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe({
      next: (values) => {
        this.city$ = this.service.findById(values['id']);
        this.id = values['id'];
        this.city$.subscribe({
          next: ({ title, photoUrl }) => {
            this.form = new FormGroup({
              title: new FormControl<string>(title, [Validators.required]),
              photoUrl: new FormControl<string>(photoUrl, [
                Validators.required,
              ]),
            });
          },
          error: () => {
            this.errorService.handle(`Cannot get city with id ${values['id']}`);
            this.router.navigate(['/404']);
          },
        });
      },
    });
  }
  submit() {
    this.modalService.close();
    this.service.patchCity(this.id, this.form.value).subscribe({
      next: (v) => {
        this.router
          .navigateByUrl('/', { skipLocationChange: true })
          .then(() => this.router.navigate([`city/${v.id}`]));
      },
      error: (e) => {
        this.errorService.handle(`Cannot edit city, ${e.error.error}`);
      },
    });
  }

  get title() {
    return this.form.get('title') as FormControl;
  }

  get photoUrl() {
    return this.form.get('photoUrl') as FormControl;
  }
}
