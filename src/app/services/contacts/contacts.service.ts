import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { IContact } from 'src/app/interfaces/shared.interfaces';
import { EnvironmentService } from 'src/app/services/environment/environment.service';
import { ErrorHandlerService } from 'src/app/services/error-handler/error-handler.service';

@Injectable({
  providedIn: 'root',
})
export class ContactsService extends ErrorHandlerService {

  protected name = 'Contacts';

  constructor(
    private http: HttpClient,
    private env: EnvironmentService,
  ) {
    super();
  }

  get(): Observable<IContact[]> {
    return this.http.get<IContact[]>(`${this.env.CONTACT_API2}/contact`)
      .pipe(
        catchError(this.errorHandler)
      );
  }
}
