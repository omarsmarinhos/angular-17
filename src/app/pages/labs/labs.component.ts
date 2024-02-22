import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  welcome = 'Hola';
  tasks = signal([
    'Instalar el Angular CLI',
    'Crear el proyecto',
    'Crear componentes',
    'Crear servicio'
  ]);

  name = signal('Omar');
  disabled = true;
  img = 'http://w3schools.com/howto/img_avatar.png';

  person = {
    name: 'Omar',
    age: 23,
    avatar: 'http://w3schools.com/howto/img_avatar.png'
  }

  colorCtrl = new FormControl();

  constructor() {
    this.colorCtrl.valueChanges.subscribe(value => {
      console.log(value);
    })
  }

  clickHandler() {
    alert('Hola');
  }

  changeHandler(e: Event) {
    const input = e.target as HTMLInputElement;
    this.name.set(input.value);
  }

  keydownHandler(e: KeyboardEvent) {
    const input = e.target as HTMLInputElement;
    console.log(input.value);
  }
}
