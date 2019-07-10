import { Component } from '@angular/core';
import { Email } from './models/email';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private _isEmailOpen = false;

  email: Email = new Email();

  get isEmailOpen(){
    return this._isEmailOpen;
  }
 
  toggleEmailForm(){
    this._isEmailOpen = !this.isEmailOpen
  }

  enviarEmail(eventoSubmit: Event){

    eventoSubmit.preventDefault();
    console.log(this.email);
  }

}
