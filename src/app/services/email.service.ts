import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Email } from '../models/email';
import { EmailInput } from '../models/dto/email-input';

@Injectable()
export class EmailService {

  url = environment.api+'emails';

  headersAuth = {
    headers: new HttpHeaders('Authorization: '+localStorage.getItem('cmail-token'))
  }

  constructor(private http: HttpClient){}

  enviar(email: Email){

    /*
    let emailDto: EmailInput = {
      content: email.conteudo,
      to: email.destinatario,
      subject: email.assunto
    } */

    let emailDto = new EmailInput(email);
    return this.http.post(this.url,emailDto,this.headersAuth);
  }

  carregar(){

  }

}
