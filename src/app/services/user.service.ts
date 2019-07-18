import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { UserInput } from '../models/dto/user-input';
import { Observable } from 'rxjs';
import { UserOutput } from '../models/dto/user-output';
import { map } from 'rxjs/operators';

@Injectable()
export class UserService {

  url = environment.api+'users'

  constructor(private http: HttpClient){}

  cadastrar(dadosForm): Observable<UserOutput> {

    const dtoUser = new UserInput(dadosForm);

    return this.http.post(this.url,dtoUser)
                    .pipe(
                      map((userApi:any) => new UserOutput(userApi))
                    )
  }

}
