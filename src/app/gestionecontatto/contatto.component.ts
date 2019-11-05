import { Component } from '@angular/core';
import { Contatto } from './contatto.model';

@Component({
  selector: 'app-contatto',
  templateUrl: './contatto.component.html',
  styleUrls: [ './contatto.component.css' ]
})
export class ContattoComponent  {
  contatto: Contatto = new Contatto('Matteo','Zandonai','matteo.zandonai@gmail.com','789377736',5);

}
