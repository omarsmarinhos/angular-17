import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  welcome = 'Hola';
  tasks = [
    'Instalar el Angular CLI',
    'Crear el proyecto',
    'Crear componentes',
    'Crear servicio'
  ]
  name= 'Omar';
  disabled = true;
  img = 'http://w3schools.com/howto/img_avatar.png';

  person = {
    name: 'Omar',
    age: 23,
    avatar: 'http://w3schools.com/howto/img_avatar.png'
  }

  clickHandler() {
    alert('Hola');
  }

  changeHandler(e: Event) {
    console.log(e);
  }
}
